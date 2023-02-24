import { useEffect, useState } from "react";
import podcastsStorageService from "@/services/podcastsStorage.service";
import TPodcast from "@/types/TPodcast";

const EpisodeDetailsHooks: any = (episodeid: string) => {

    const [podcastDetails, setPodcastDetails] = useState<TPodcast | {}>();
    const [episodeDetails, setEpisodeDetails] = useState<TPodcast | {}>();
    const [isFetchingPodcastDetails, setIsFetchingPodcastDetails] = useState<boolean>(true);


    const fetchPodcastAndEpisodes = () => {
        const podcast = podcastsStorageService.getPodcastAndEpisodes();
        if (podcast) {
            setPodcastDetails(podcast.podcastDetails);

            // busca el episodio del array de episodios
            podcastsStorageService.findEpisodeOnPodcast(podcast, episodeid).then(episode => {
                setEpisodeDetails(episode)
            }).catch(err => {
                console.error(err);
            }).finally(() => {
                setIsFetchingPodcastDetails(false);
            });
        }
    }

    useEffect(() => {
        fetchPodcastAndEpisodes();
    }, [])

    return { podcastDetails, isFetchingPodcastDetails, episodeDetails }
}

export default EpisodeDetailsHooks;

