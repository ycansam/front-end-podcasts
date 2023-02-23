import podcastsService from "@/services/podcasts.service";
import TPodcastDetails from "@/types/TPodcastDetails";
import TPodcastEpisode from "@/types/TPodcastEpisode";
import { Dispatch, SetStateAction } from "react";

const PodcastDetailsServices: any = () => {

    const fetchPodcastDetails = (podcastid: string, setState: Dispatch<SetStateAction<TPodcastDetails>>, setFetching: Dispatch<SetStateAction<boolean>>) => {
        podcastsService.getPodcastDetails(podcastid).then(res => {
            const podcast: TPodcastDetails = res.data.results[0];
            setState(podcast)
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

