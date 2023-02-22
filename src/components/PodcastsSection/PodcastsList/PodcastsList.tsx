import Link from "next/link"
import podcastsService from "@/services/podcasts.service";
import { useEffect, useState } from "react";
import PodcastsListHooks from "./hooks/PodcastsList.hooks";
const PodcastsList: React.FC = () => {

    const { podcasts, isFetching } = PodcastsListHooks();

    if (isFetching)
        return <p>is loading...</p>

    return (
        <ul>
            {podcasts.map((podcast) => {
                return <p>{podcast.title.label}</p>
            })}
        </ul>
    )
}

export default PodcastsList;

