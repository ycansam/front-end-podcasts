import podcastsService from "@/services/podcasts.service";
import TPodcastDetails from "@/types/TPodcastDetails";
import TPodcastEpisode from "@/types/TPodcastEpisode";
import { useEffect, useState } from "react";

const PodcastDetailsHooks: any = (podcastid: string) => {

    const [podcastDetails, setPodcastDetails] = useState({});
    const [podcastsEpisodes, setPodcastEpisodes] = useState([{}]);
    const [isFetchingDetails, setIsFetchingDetails] = useState(true);
    const [isFetchingEpisodes, setIsFetchingEpisodes] = useState(true);

    const fetchPodcastDetails = () => {
        podcastsService.getPodcastDetails(podcastid).then(res => {
            const podcast: TPodcastDetails = res.data.results[0];
            setPodcastDetails(podcast)
        }).catch(err => {
            console.error(err)
        }).finally(() => {
            setIsFetchingDetails(false);
        })
    }

    const fetchPodcastEpisodes = () => {
        podcastsService.getPodcastEpisodes(podcastid, 200).then(res => {
            const episodes: TPodcastEpisode[] = res.data.results;
            setPodcastEpisodes(episodes);
        }).catch(err => {
            console.error(err)
        }).finally(() => {
            setIsFetchingEpisodes(false);
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

    useEffect(() => {
        fetchPodcastDetails();
        fetchPodcastEpisodes();
    }, [])

    return { podcastDetails, isFetchingDetails, isFetchingEpisodes, podcastsEpisodes }
}

export default PodcastDetailsHooks;

