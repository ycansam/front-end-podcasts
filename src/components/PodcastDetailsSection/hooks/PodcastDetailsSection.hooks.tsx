import { useEffect, useState } from "react";
import PodcastDetailsServices from "../services/PodcastDetails.service";
import TPodcastEpisode from "@/types/TPodcastEpisode";
import TDetailsServicesReturn from "../types/TPodcastDetailsServicesReturn";

const PodcastDetailsHooks: any = (podcastid: string) => {

    const [podcastDetails, setPodcastDetails] = useState({});
    const [podcastsEpisodes, setPodcastEpisodes] = useState<TPodcastEpisode[]>([]);
    const [isFetchingDetails, setIsFetchingDetails] = useState<boolean>(true);
    const [isFetchingEpisodes, setIsFetchingEpisodes] = useState<boolean>(true);
    const { fetchPodcastDetails, fetchPodcastEpisodes }: TDetailsServicesReturn = PodcastDetailsServices()

    useEffect(() => {
        fetchPodcastDetails(podcastid, setPodcastDetails, setIsFetchingDetails);
        fetchPodcastEpisodes(podcastid, setPodcastEpisodes, setIsFetchingEpisodes);
    }, [])

    return { podcastDetails, isFetchingDetails, isFetchingEpisodes, podcastsEpisodes }
}

export default PodcastDetailsHooks;

