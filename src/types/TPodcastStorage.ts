import TPodcastEpisode from "./TPodcastEpisode";
import TPodcast from "./TPodcast";
type TPodcastStorage = {
    podcastDetails: TPodcast;
    episodes: TPodcastEpisode[],
    saved_at: number; // millis
}
export default TPodcastStorage;