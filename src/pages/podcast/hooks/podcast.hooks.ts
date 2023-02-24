import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import podcastsStorageService from '@/services/podcastsStorage.service'

type TPodcastPageQuery = {
    podcastid: string;
}

const PodcastHooks: any = () => {
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



    return { podcastFound, podcastid }
}

export default PodcastHooks;

