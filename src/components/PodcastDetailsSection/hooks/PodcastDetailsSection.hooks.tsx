import podcastsService from "@/services/podcasts.service";
import TPodcastDetails from "@/types/TPodcastDetails";
import { useEffect, useState } from "react";

const PodcastDetailsHooks: any = (podcastid: string) => {

    const [podcastDetails, setPodcastDetails] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    const fetchPodcastDetails = () => {
        podcastsService.getPodcastDetails(podcastid).then(res => {
            const podcast: TPodcastDetails = res.data.results[0];
            setPodcastDetails(podcast)
        }).catch(err => {
            console.error(err)
        }).finally(() => {
            setIsFetching(false);
        })
    }

    useEffect(() => {
        fetchPodcastDetails();
    }, [])

    return { podcastDetails, isFetching }
}

export default PodcastDetailsHooks;

