import { useEffect, useState } from "react";
import PodcastDetailsServices from "../services/PodcastDetails.service";
import TPodcastEpisode from "@/types/TPodcastEpisode";
import TDetailsServicesReturn from "../types/TPodcastDetailsServicesReturn";
import podcastsStorageService from "@/services/podcastsStorage.service";
import TPodcastStorage from "@/types/TPodcastStorage";
const PodcastDetailsHooks: any = (podcastid: string) => {

    const [podcastDetails, setPodcastDetails] = useState({});
    const [podcastsEpisodes, setPodcastEpisodes] = useState<TPodcastEpisode[]>([]);
    const [isFetchingDetails, setIsFetchingDetails] = useState<boolean>(true);
    const [isFetchingEpisodes, setIsFetchingEpisodes] = useState<boolean>(true);
    const [hasFetchedDataByOneDay, setHasFetchedDataByOneDay] = useState<boolean>(false);
    const { fetchPodcastDetails, fetchPodcastEpisodes }: TDetailsServicesReturn = PodcastDetailsServices();


    const fetchDataByDayCondition = () => {
        const podcast: TPodcastStorage = podcastsStorageService.checkIfCanFetchPodcast(podcastid);
        if (!podcast) {
            fetchPodcastDetails(podcastid, setPodcastDetails, setIsFetchingDetails);
            fetchPodcastEpisodes(podcastid, setPodcastEpisodes, setIsFetchingEpisodes);
            setHasFetchedDataByOneDay(true);
        } else {
            console.log(podcast);
            setPodcastDetails(podcast.podcastDetails);
            setPodcastEpisodes(podcast.episodes);
            setIsFetchingDetails(false);
            setIsFetchingEpisodes(false);
        }
    }

    useEffect(() => {
        fetchDataByDayCondition();
    }, [])


    return { podcastDetails, isFetchingDetails, isFetchingEpisodes, podcastsEpisodes, hasFetchedDataByOneDay }
}

export default PodcastDetailsHooks;

