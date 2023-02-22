import React, { useState } from 'react';
import styles from './PodcastsSection.module.css'
import PodcastsList from "./PodcastsList/PodcastsList"
import FilterPodcasts from './FilterPodcasts/FilterPodcasts';
import PodcastsListHooks from './PodcastsList/hooks/PodcastsList.hooks';
import TPodcast from '@/types/TPodcast';
import PodcastsSectionServices from './services/PodcastsSection.service';

type PodcastsListHooksReturn = {
    podcasts: TPodcast[];
    isFetching: boolean;
};

type PodcastsSectionServicesReturn = {
    getPodcastsFiltred: (podcasts: TPodcast[], filter: string) => TPodcast[];
};

const PodcastsSection: React.FC = () => {

    const [filter, setFilter] = useState('');
    
    const { podcasts, isFetching }: PodcastsListHooksReturn = PodcastsListHooks();
    const { getPodcastsFiltred }: PodcastsSectionServicesReturn = PodcastsSectionServices();

    if (isFetching)
        return <p>is loading...</p>

    return (
        <section className={styles.sectionContainer}>

            <FilterPodcasts setFilter={setFilter} filter={filter} podcastsLength={podcasts.length} />
            <PodcastsList podcasts={getPodcastsFiltred(podcasts, filter)} />
        </section>
    )
}

export default PodcastsSection;

