import podcastsService from "@/services/podcasts.service";
import podcastsStorageService from "@/services/podcastsStorage.service";
import TPodcast from "@/types/TPodcast";
import TPodcastDetails from "@/types/TPodcastDetails";
import TPodcastEpisode from "@/types/TPodcastEpisode";
import { Dispatch, SetStateAction } from "react";

type TPocastDetailSersericesReturn = {
    fetchPodcastDetails: (
        podcastid: string,
        setState: Dispatch<SetStateAction<TPodcast>>,
        setFetching: Dispatch<SetStateAction<boolean>>
    ) => void;
    fetchPodcastEpisodes: (
        podcastid: string,
        setState: Dispatch<SetStateAction<TPodcastEpisode[]>>,
        setFetching: Dispatch<SetStateAction<boolean>>
    ) => void;
}

const PodcastDetailsServices: any = (): TPocastDetailSersericesReturn => {

    const fetchPodcastDetails = (podcastid: string, setState: Dispatch<SetStateAction<TPodcast>>, setFetching: Dispatch<SetStateAction<boolean>>) => {
        let resPodcast: TPodcast = podcastsStorageService.getPodcast(podcastid);
        podcastsService.getPodcastDetails(podcastid).then(res => {
            const podcast: TPodcastDetails = res.data.results[0];
            resPodcast.trackCount = podcast.trackCount;
            setState(resPodcast);
        }).catch(err => {
            console.error(err)
        }).finally(() => {
            setFetching(false);
        })
    }

    const fetchPodcastEpisodes = (podcastid: string, setState: Dispatch<SetStateAction<TPodcastEpisode[]>>, setFetching: Dispatch<SetStateAction<boolean>>) => {
        podcastsService.getPodcastEpisodes(podcastid, 200).then(res => {
            const episodes: TPodcastEpisode[] = res.data.results;
            setState(episodes);
        }).catch(err => {
            console.error(err)
        }).finally(() => {
            setFetching(false);
        })
    }

    // const fetchMoreEpisodes = () => {
    //     podcastsService.getPodcastEpisodes(podcastid, podcastsEpisodes.length + 200).then(res => {
    //         const episodes: TPodcastEpisode[] = res.data.results;
    //         setPodcastEpisodes((prevEpisodes) => prevEpisodes.concat(episodes));
    //     }).catch(err => {
    //         console.error(err)
    //     }).finally(() => {
    //         setIsFetchingEpisodes(false);
    //     })
    // }

    return { fetchPodcastDetails, fetchPodcastEpisodes }
}

export default PodcastDetailsServices;

