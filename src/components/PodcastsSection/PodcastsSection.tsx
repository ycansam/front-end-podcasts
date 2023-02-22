import React, { useState, useEffect } from 'react';
import styles from './PodcastsSection.module.css'
import PodcastsList from "./PodcastsList/PodcastsList"
import FilterPodcasts from './FilterPodcasts/FilterPodcasts';
import PodcastsListHooks from './PodcastsList/hooks/PodcastsList.hooks';

const PodcastsSection: React.FC = () => {


    const { podcasts, isFetching } = PodcastsListHooks();
    const [filter, setFilter] = useState('');

    if (isFetching)
        return <p>is loading...</p>

    const getPodcastsFiltred = () => {
        return podcasts.filter((podcast: any) => {
            const name: string = podcast["im:name"].label
            console.log(name.includes(filter));
            return name.toLowerCase().includes(filter.toLowerCase()) && podcast;
        });
    }


    return (
        <section className={styles.sectionContainer}>
            <FilterPodcasts setFilter={setFilter} filter={filter} />
            <PodcastsList podcasts={getPodcastsFiltred()} />
        </section>
    )
}

export default PodcastsSection;

