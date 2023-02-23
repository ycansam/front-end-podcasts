import { Dispatch, SetStateAction, useEffect, useState } from "react";
import PodcastDetailsServices from "../services/PodcastDetails.service";
import TPodcastDetails from "@/types/TPodcastDetails";
import TPodcastEpisode from "@/types/TPodcastEpisode";

type TDetailsServicesReturn = {
    fetchPodcastDetails: (podcastid: string, setState: Dispatch<SetStateAction<TPodcastDetails>>, setFetching: Dispatch<SetStateAction<boolean>>) => void;
    fetchPodcastEpisodes: (podcastid: string, setState: Dispatch<SetStateAction<TPodcastEpisode[]>>, setFetching: Dispatch<SetStateAction<boolean>>) => void;
}

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

