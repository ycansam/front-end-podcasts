import { useEffect, useState } from "react";
import PodcastDetailsServices from "@/components/PodcastDetailsSection/services/PodcastDetails.service";
import TDetailsServicesReturn from "@/components/PodcastDetailsSection/types/TPodcastDetailsServicesReturn";
import TPodcastDetails from "@/types/TPodcastDetails";
import podcastsStorageService from "@/services/podcastsStorage.service";
import TPodcast from "@/types/TPodcast";

const EpisodeDetailsHooks: any = (podcastid: string, episodeid: string) => {

    const [podcastDetails, setPodcastDetails] = useState<TPodcast | {}>();
    const [episodeDetails, setEpisodeDetails] = useState<TPodcast | {}>();
    const [isFetchingPodcastDetails, setIsFetchingPodcastDetails] = useState<boolean>(true);

    // funcion obtneida de los servicios de PodcastDetailsSection.
    const { fetchPodcastDetails }: TDetailsServicesReturn = PodcastDetailsServices();

    const fetchStorageData = () => {
        const podcast = podcastsStorageService.getPodcastAndEpisodes(podcastid);
        if (podcast) {
            setPodcastDetails(podcast.podcastDetails);

            // busca el episodio del array de episodios
            setEpisodeDetails(podcast.episodes.find((episode) => {
                return episode.trackId.toString() == episodeid;
            }))
        }
    }

    useEffect(() => {
        fetchPodcastDetails(podcastid, setPodcastDetails, setIsFetchingPodcastDetails);
        fetchStorageData();
    }, [])

    return { podcastDetails, isFetchingPodcastDetails, episodeDetails }
}

export default EpisodeDetailsHooks;

