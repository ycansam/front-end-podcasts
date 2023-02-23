import podcastsService from "@/services/podcasts.service";
import { useEffect, useState } from "react";

const PodcastDetailsHooks = (podcastid: string) => {

    const [podcast, setPodcast] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    const fetchPodcast = () => {
        podcastsService.getPodcastDetails(podcastid).then(res => {
            console.log(res)
        }).catch(err => {
            console.error(err)
        })
            .finally(() => {
                setIsFetching(false);
            })
    }

    useEffect(() => {
        fetchPodcast();
    }, [])

    return { podcast, isFetching }
}

export default PodcastDetailsHooks;

