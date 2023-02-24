import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import podcastsStorageService from '@/services/podcastsStorage.service'

type TPodcastPageQuery = {
    podcastid: string;
}

const PodcastHooks = () => {
    const router = useRouter()
    const [podcastFound, setFound] = useState<boolean>(false)
    const { podcastid } = router.query as TPodcastPageQuery;

    // comprueba que el podcast existe
    const checkIfNotExistsPodcast = () => {
        podcastid && podcastsStorageService.getPodcast(podcastid).then(res => {
            setFound(true)
        })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        checkIfNotExistsPodcast();
    })

    return [podcastid, podcastFound];

}

export default PodcastHooks;

