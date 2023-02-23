import TPodcastDetails from "./TPodcastDetails";
import TPodcastEpisode from "./TPodcastEpisode";

type TPodcastStorage = {
    podcastDetails: TPodcastDetails;
    episodes: TPodcastEpisode[],
    saved_at: number; // millis
}
export default TPodcastStorage;