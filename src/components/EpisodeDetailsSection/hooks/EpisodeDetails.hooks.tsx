import { useEffect, useState } from "react";
import PodcastDetailsServices from "@/components/PodcastDetailsSection/services/PodcastDetails.service";
import TDetailsServicesReturn from "@/components/PodcastDetailsSection/types/TPodcastDetailsServicesReturn";
import TPodcastDetails from "@/types/TPodcastDetails";
import podcastsService from "@/services/podcasts.service";

const EpisodeDetailsHooks: any = (podcastid: string, episodeid: string) => {

    const [podcastDetails, setPodcastDetails] = useState<TPodcastDetails | {}>();
    const [isFetchingPodcastDetails, setIsFetchingPodcastDetails] = useState<boolean>(true);

    // funcion obtneida de los servicios de PodcastDetailsSection.
    const { fetchPodcastDetails }: TDetailsServicesReturn = PodcastDetailsServices();


    useEffect(() => {
        fetchPodcastDetails(podcastid, setPodcastDetails, setIsFetchingPodcastDetails);
    }, [])

    return { podcastDetails, isFetchingPodcastDetails }
}

export default EpisodeDetailsHooks;

