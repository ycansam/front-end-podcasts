import router from './service-router';
class PodcastsService {

    getLimitedPodcastsByGenre(limit: number, genre: number) {
        return router.get(`us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`);
    }

}

const podcastsService = new PodcastsService();
export default podcastsService;