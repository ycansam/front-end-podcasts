import { Dispatch, SetStateAction, useEffect, useState } from "react";
import TPodcastDetails from "@/types/TPodcastDetails";
import TPodcastEpisode from "@/types/TPodcastEpisode";

type TDetailsServicesReturn = {
    fetchPodcastDetails: (podcastid: string, setState: Dispatch<SetStateAction<TPodcastDetails>>, setFetching: Dispatch<SetStateAction<boolean>>) => void;
    fetchPodcastEpisodes: (podcastid: string, setState: Dispatch<SetStateAction<TPodcastEpisode[]>>, setFetching: Dispatch<SetStateAction<boolean>>) => void;
}
export default TDetailsServicesReturn;