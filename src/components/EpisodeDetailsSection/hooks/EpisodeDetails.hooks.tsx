import Link from "next/link"
import podcastsService from "@/services/podcasts.service";
import { useEffect, useState } from "react";

const podcastsPetition = {
    limitation: 100,
    genre: 1310
}

const PodcastsListHooks: any = () => {

    const [podcasts, setPodcasts] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const fetchPodcasts = () => {
        podcastsService.getLimitedPodcastsByGenre(podcastsPetition.limitation, podcastsPetition.genre)
            .then(res => {
                // entry contiene el array de podcasts
                const { entry } = res.data.feed;
                setPodcasts(entry);
            }).catch(err => {
                console.error(err);
            }).finally(() => {
                setIsFetching(false);
            })
    }

    useEffect(() => {
        fetchPodcasts();
    }, [])

    return { podcasts, isFetching }
}

export default PodcastsListHooks;

