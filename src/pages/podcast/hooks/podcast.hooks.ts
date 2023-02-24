import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import podcastsStorageService from '@/services/podcastsStorage.service'

type TPodcastPageQuery = {
    podcastid: string;
}

const PodcastHooks: any = () => {
    const router = useRouter()
    const [podcastNotFound, setNotFound] = useState<boolean>(false)
    const { podcastid } = router.query as TPodcastPageQuery;

    // comprueba que el podcast existe
    const checkIfNotExistsPodcast = () => {
        podcastid && podcastsStorageService.getPodcast(podcastid)
            .catch(err => {
                setNotFound(true);
                console.error(err);
            })
    }

    useEffect(() => {
        checkIfNotExistsPodcast();
    })

    return { podcastNotFound, podcastid }
}

export default PodcastHooks;

