import TPodcast from "@/types/TPodcast";
import TPodcastStorage from "@/types/TPodcastStorage";
import TPodcastArrayStorage from "@/types/TPodcastsStorage";

const localStorageVariables = {
    topPodcasts: "top-podcasts"
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

    // Guarda un podcast y sus episodios durante 1 dia
    public savePodcastAndEpisodes1Day(podcastId: string, { podcastDetails, episodes }: any): void {
        try {
            localStorage.setItem(podcastId, JSON.stringify({ podcastDetails, episodes, saved_at: Date.now() }))
            // Almacenar la información
        } catch (err) {
            console.error(err);
        }
    }

    // Consulta si puede hacer un nuevo fetch a los datos
    public checkIfCanFetchPodcast(podcastId: string): TPodcastStorage | any {
        const podcaststring = this.getItemData(podcastId);
        // si existe el podcast almacenado comprueba que ha pasado 1 dia. 
        // devuelve true si ha pasado mas de 1 dia por lo que puede almacenar la variable
        // devuelve false si todavia no ha pasado 1 dia;
        if (podcaststring !== null) {
            const currentTime = Date.now();
            const podcast: TPodcastStorage = this.getParsedItem(podcaststring);
            // console.log(podcast);
            if (podcast && (currentTime - podcast.saved_at) < 24 * 60 * 60 * 1000) {
                return podcast;
            }
            return false;
        }
        return false;

    }

    // Obtiene un podcast y sus episodios
    public getPodcastAndEpisodes(podcastId: string): TPodcastStorage | undefined {
        const podcaststring = this.getItemData(podcastId);
        if (podcaststring !== null) {
            const podcast: TPodcastStorage = this.getParsedItem(podcaststring);
            return podcast;
        }
    }

    public checkIfCanFetchAllPodcasts(): TPodcast[] | any {
        const topPodcasts = this.getItemData(localStorageVariables.topPodcasts);

        if (topPodcasts !== null) {
            const currentTime = Date.now();
            const podcastsArray: TPodcastArrayStorage = this.getParsedItem(topPodcasts);
            if (podcastsArray.podcasts && (currentTime - podcastsArray.saved_at) < 24 * 60 * 60 * 1000) {
                console.log(podcastsArray.podcasts)
                return podcastsArray.podcasts;
            }
            return false;
        }
        return false;
    }

    private setTopPodcasts(podcasts: TPodcast[]): void {
        localStorage.setItem(localStorageVariables.topPodcasts, JSON.stringify({ podcasts, saved_at: Date.now() }))
    }

    public saveTopPodcasts(podcasts: TPodcast[]): void {
        try {
            this.setTopPodcasts(podcasts);
        } catch (err) {
            console.error(err);
        }
    }

}

const podcastsStorageService = new PodcastsStorageService();
export default podcastsStorageService;