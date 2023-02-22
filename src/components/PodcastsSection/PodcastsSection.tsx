import React, { useState } from 'react';
import styles from './PodcastsSection.module.css'
import PodcastsList from "./PodcastsList/PodcastsList"
import FilterPodcasts from './FilterPodcasts/FilterPodcasts';
import PodcastsListHooks from './PodcastsList/hooks/PodcastsList.hooks';
import TPodcast from '@/types/TPodcast';

type PodcastsListHooksReturn = {
    podcasts: TPodcast[];
    isFetching: boolean;
};

const PodcastsSection: React.FC = () => {

    const { podcasts, isFetching }: PodcastsListHooksReturn = PodcastsListHooks();
    const [filter, setFilter] = useState('');

    if (isFetching)
        return <p>is loading...</p>

    const getPodcastsFiltred = () => {
        return podcasts.filter((podcast) => {

            const name = podcast["im:name"].label;

            // En caso de que el nombre del podcast contenga el filtro introducido devuelve el podcast
            return name.toLowerCase().includes(filter.toLowerCase()) && podcast;
        });
    }


    return (
        <section className={styles.sectionContainer}>
            
            <FilterPodcasts setFilter={setFilter} filter={filter} podcastsLength={podcasts.length} />
            <PodcastsList podcasts={getPodcastsFiltred()} />
        </section>
    )
}

export default PodcastsSection;

