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
    const { fetchPodcastDetails, fetchPodcastEpisodes }: TDetailsServicesReturn = PodcastDetailsServices();

    const setPodcastPodcastEnEpisodeDetails = (podcast: TPodcastStorage) => {
        setPodcastDetails(podcast.podcastDetails);
        setPodcastEpisodes(podcast.episodes);
        setIsFetchingDetails(false);
        setIsFetchingEpisodes(false);
    }

    // Comprueba que ha pasado 1 dia antes de que vuelva a hacer la peticion
    const fetchDataByDayCondition = () => {
        const podcast: TPodcastStorage = podcastsStorageService.checkIfCanFetchPodcast(podcastid);
        // si ha devuelto falso significa que o no existe la variable o ha pasado mas de 1 dia por lo que puede hacer fetch
        if (!podcast) {
            fetchPodcastDetails(podcastid, setPodcastDetails, setIsFetchingDetails);
            fetchPodcastEpisodes(podcastid, setPodcastEpisodes, setIsFetchingEpisodes);
        } else {
            setPodcastPodcastEnEpisodeDetails(podcast);
        }
    }

    const checkIfPodcastExist = () => {
        // Si encuentra el podcast procede a buscarlo
        podcastsStorageService.getPodcast(podcastid).then(res => {
            fetchDataByDayCondition();
        }).catch(err => {
            console.error(err);
        }).finally(() => {
        })
    }

    useEffect(() => {
        checkIfPodcastExist();
    }, [])

    return { podcastDetails, isFetchingDetails, isFetchingEpisodes, podcastsEpisodes }
}

export default PodcastDetailsHooks;

