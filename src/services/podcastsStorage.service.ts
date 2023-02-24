import TPodcastStorage from "@/types/TPodcastStorage";
class PodcastsStorageService {

    public savePodcastAndEpisodes1Day(podcastId: string, { podcastDetails, episodes }: any) {
        try {
            localStorage.setItem(podcastId, JSON.stringify({ podcastDetails, episodes, saved_at: Date.now() }))
            // Almacenar la información
        } catch (err) {
            console.error(err);
        }
    }

    public checkIfCanFetchPodcast(podcastId: string): TPodcastStorage | any {
        const podcaststring = localStorage.getItem(podcastId) as string;
        // si existe el podcast almacenado comprueba que ha pasado 1 dia. 
        // devuelve true si ha pasado mas de 1 dia por lo que puede almacenar la variable
        // devuelve false si todavia no ha pasado 1 dia;
        if (podcaststring !== null)
            try {
                const currentTime = Date.now();
                const podcast: TPodcastStorage = JSON.parse(podcaststring as string)
                // console.log(podcast);
                if (podcast && (currentTime - podcast.saved_at) < 24 * 60 * 60 * 1000) {
                    return podcast;
                }
                return false;

            } catch (err) {
                console.error(err);
            }
        return false;

    }

    public getPodcastAndEpisodes(podcastId: string) {
        const podcaststring = localStorage.getItem(podcastId) as string;
        if (podcaststring !== null) {
            const podcast: TPodcastStorage = JSON.parse(podcaststring as string)
            return podcast;
        }
    }

}

const podcastsStorageService = new PodcastsStorageService();
export default podcastsStorageService;