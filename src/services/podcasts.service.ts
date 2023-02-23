import router from './service-router';
class PodcastsService {

    getLimitedPodcastsByGenre(limit: number, genre: number) {
        return router.get(`us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`);
    }
    
    getPodcastDetails(podcastId: string){
        return router.get(`/lookup?id=${podcastId}`);
    }

}

const podcastsService = new PodcastsService();
export default podcastsService;