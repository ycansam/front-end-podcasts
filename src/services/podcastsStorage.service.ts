import TPodcast from "@/types/TPodcast";
import TPodcastEpisode from "@/types/TPodcastEpisode";
import TPodcastStorage from "@/types/TPodcastStorage";
import TPodcastArrayStorage from "@/types/TPodcastsStorage";

const localStorageVariables = {
    topPodcasts: "top-podcasts",
    podcastDetails: "podcast-details"
}
const millis = {
    dia: 24 * 60 * 60 * 1000
}

type SavePodcastAndEpisodes = {
    podcastDetails: TPodcast;
    episodes: TPodcastEpisode[];
}

class PodcastsStorageService {

    private getItemData(identifier: string): string {
        const item = localStorage.getItem(identifier) as string;
        return item;
    }

    private getParsedItem(JsonString: string): any {
        try {
            const item = JSON.parse(JsonString as string)
            return item;
        } catch (err) {
            console.error(err);
        }
    }

    private saveItem(identifier: string, body: Object): void {
        localStorage.setItem(identifier, JSON.stringify(body))
    }

    // Guarda un podcast y sus episodios durante 1 dia
    public savePodcastAndEpisodes1Day({ podcastDetails, episodes }: SavePodcastAndEpisodes): void {
        const podcaststring = this.getItemData(localStorageVariables.podcastDetails);
        if (podcaststring)
            try {
                const podcast: TPodcastStorage = this.getParsedItem(podcaststring);
                const currentTime = Date.now();

                // Si es el mismo podcast y ha pasado mas de 1 dia se vuelve a guardar
                if (podcast.podcastDetails.id.attributes["im:id"] === podcastDetails.id.attributes["im:id"]) {
                    if (!podcast || (currentTime - podcast.saved_at) > millis.dia) {
                        this.saveItem(localStorageVariables.podcastDetails, { podcastDetails, episodes, saved_at: Date.now() });
                    }
                } else {
                    // si el podcast es diferente se guarda automaticamente
                    this.saveItem(localStorageVariables.podcastDetails, { podcastDetails, episodes, saved_at: Date.now() });
                }
            } catch (err) {
                console.error(err);
            }
        else {
            this.saveItem(localStorageVariables.podcastDetails, { podcastDetails, episodes, saved_at: Date.now() });
        }
    }

    // Consulta si puede hacer un nuevo fetch a los datos
    public checkIfCanFetchPodcast(podcastId: string): TPodcastStorage | any {
        const podcaststring = this.getItemData(localStorageVariables.podcastDetails);

        // si existe el podcast almacenado comprueba que ha pasado 1 dia. 
        // devuelve true si ha pasado mas de 1 dia por lo que puede almacenar la variable
        // devuelve false si todavia no ha pasado 1 dia;
        if (podcaststring !== null) {
            const currentTime = Date.now();
            const podcast: TPodcastStorage = this.getParsedItem(podcaststring);
            // si el podcast que esta guardado es el mismo
            if (podcast.podcastDetails.id.attributes["im:id"] == podcastId) {
                if (podcast && (currentTime - podcast.saved_at) < millis.dia) {
                    return podcast;
                }
            }

            return false;
        }
        return false;

    }

    // Obtiene un podcast y sus episodios
    public getPodcastAndEpisodes(): TPodcastStorage | undefined {
        const podcaststring = this.getItemData(localStorageVariables.podcastDetails);
        if (podcaststring !== null) {
            const podcast: TPodcastStorage = this.getParsedItem(podcaststring);
            return podcast;
        }
    }

    // Comprueba que puede hacer fetch
    // Solo puede hacer fetch si no existe el item o si ha pasado mas de 1 dia
    public checkIfCanFetchAllPodcasts(): TPodcast[] | any {
        const topPodcasts = this.getItemData(localStorageVariables.topPodcasts);

        if (topPodcasts !== null) {
            const currentTime = Date.now();
            const podcastsArray: TPodcastArrayStorage = this.getParsedItem(topPodcasts);
            if (podcastsArray.podcasts && (currentTime - podcastsArray.saved_at) < millis.dia) {
                return podcastsArray.podcasts;
            }
            return false;
        }
        return false;
    }

    public getPodcast(podcastid: string): Promise<TPodcast | Error> {
        const podcastsString: string = this.getItemData(localStorageVariables.topPodcasts);
        const podcasts: TPodcastArrayStorage = this.getParsedItem(podcastsString);
        const foundPodcast = podcasts.podcasts.find((podcast) => {
            return podcast.id.attributes["im:id"] === podcastid;
        }) as TPodcast;
        if (foundPodcast)
            return Promise.resolve(foundPodcast);
        return Promise.reject(new Error("Podcast no encontrado"))
    }


    public saveTopPodcasts(podcasts: TPodcast[]): void {
        try {
            this.saveItem(localStorageVariables.topPodcasts, { podcasts, saved_at: Date.now() });
        } catch (err) {
            console.error(err);
        }
    }

    public findEpisodeOnPodcast = (podcast: TPodcastStorage, episodeid: string): Promise<TPodcastEpisode | Error> => {
        const episode = podcast.episodes.find((episode) => {
            return episode.trackId.toString() == episodeid;
        });
        if (episode)
            return Promise.resolve(episode);
        return Promise.reject(new Error("Episodio no encontrado"))
    }
}

const podcastsStorageService = new PodcastsStorageService();
export default podcastsStorageService;