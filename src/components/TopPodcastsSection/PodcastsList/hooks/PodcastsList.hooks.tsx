import podcastsService from "@/services/podcasts.service";
import { useEffect, useState } from "react";
import podcastsStorageService from "@/services/podcastsStorage.service";
import TPodcast from "@/types/TPodcast";
const podcastsPetition = {
    limitation: 100,
    genre: 1310
}

const PodcastsListHooks: any = () => {

    const [podcasts, setPodcasts] = useState<TPodcast[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    const fetchPodcasts = () => {
        podcastsService.getLimitedPodcastsByGenre(podcastsPetition.limitation, podcastsPetition.genre)
            .then(res => {
                // entry contiene el array de podcasts
                const { entry } = res.data.feed;
                setPodcasts(entry);
                savePodcastLocally(entry)
            }).catch(err => {
                console.error(err);
            }).finally(() => {
                setIsFetching(false);
            })
    }

    const savePodcastLocally = (podcasts: TPodcast[]) => {
        podcastsStorageService.saveTopPodcasts(podcasts);
    }

    useEffect(() => {

        const resPodcasts: TPodcast[] = podcastsStorageService.checkIfCanFetchAllPodcasts();
        // si ha devuelto falso significa que o no existe la variable o ha pasado mas de 1 dia por lo que puede hacer fetch
        if (!resPodcasts) {
            fetchPodcasts();
        } else {
            setPodcasts(resPodcasts);
            setIsFetching(false);
        }

    }, [])

    return { podcasts, isFetching }
}

export default PodcastsListHooks;

