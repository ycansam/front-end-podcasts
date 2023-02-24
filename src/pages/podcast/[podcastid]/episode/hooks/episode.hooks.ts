import { useRouter } from "next/router";
import { useState } from "react";
import podcastsStorageService from '@/services/podcastsStorage.service'
import { useEffect } from 'react'
import TPodcastStorage from '@/types/TPodcastStorage'

type TEpisodePageQuery = {
    podcastid: string;
    episodeid: string;
}

const EpisodeHooks = () => {
    const router = useRouter()
    const [podcastFound, setPodcastFound] = useState<boolean>(false)
    const [episodeFound, setEpisodeFound] = useState<boolean>(false)
    const { episodeid } = router.query as TEpisodePageQuery;
    const { podcastid } = router.query as TEpisodePageQuery;

    // comprueba que el podcast existe
    const checkIfNotExistsPodcast = () => {
        podcastid && podcastsStorageService.getPodcast(podcastid).then(res => {
            // Si existe se buscara el episodio
            const podcast = podcastsStorageService.getPodcastAndEpisodes() as TPodcastStorage;
            checkIfNotExistEpisode(podcast);
            setPodcastFound(true);
        }).catch(err => {
            console.error(err);
        })
    }

    // Comprueba que el episodio existe en el podcast
    const checkIfNotExistEpisode = (podcast: TPodcastStorage) => {
        podcastsStorageService.findEpisodeOnPodcast(podcast, episodeid).then(res => {
            setEpisodeFound(true)
        }).catch(err => {
            console.error(err);
        })
    }

    useEffect(() => {
        checkIfNotExistsPodcast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [podcastid, episodeid])

    return ([episodeFound, podcastFound, episodeid])
}

export default EpisodeHooks;

