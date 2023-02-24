import router from './service-router';

class PodcastsService {

    getLimitedPodcastsByGenre(limit: number, genre: number) {
        return router.get(`us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`);
    }

    getPodcastDetails(podcastId: string) {
        return router.get(`/lookup?id=${podcastId}&entity=podcast`);
    }
    
    getPodcastEpisodeDetails(podcastId: string, episodeId: string) {
        return router.get(`/lookup?id=${podcastId}&entity=podcastEpisode&id=${episodeId}`);
    }

    getPodcastEpisodes(podcastId: string, offset: number = 0, limit: number = 200) {
        return router.get(`/lookup?id=${podcastId}&entity=podcastEpisode&offset=${offset}&limit=${limit}`);
    }

}

const podcastsService = new PodcastsService();
export default podcastsService;