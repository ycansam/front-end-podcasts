import React, { useState, useMemo, useContext } from 'react';
import styles from './TopPodcastsSection.module.css'
import PodcastsList from "./PodcastsList/PodcastsList"
import FilterPodcasts from './FilterPodcasts/FilterPodcasts';
import PodcastsListHooks from './PodcastsList/hooks/PodcastsList.hooks';
import TPodcast from '@/types/TPodcast';
import PodcastsSectionServices from './services/PodcastsSection.service';
import HeaderContext from '../Header/context/Header.context';

type PodcastsListHooksReturn = {
    podcasts: TPodcast[];
    isFetching: boolean;
};

type PodcastsSectionServicesReturn = {
    getFiltredPodcastsByName: (podcasts: TPodcast[], filter: string) => TPodcast[];
};

const PodcastsSection: React.FC = () => {
    const headerContext = useContext(HeaderContext);
    const { podcasts, isFetching }: PodcastsListHooksReturn = PodcastsListHooks();

    const [filter, setFilter] = useState('');

    const { getFiltredPodcastsByName }: PodcastsSectionServicesReturn = PodcastsSectionServices();

    // guarda el valor del resultado de la funcion y es llamada cada vez que filtro o podcasts varian
    const filtredPodcasts = useMemo(() => {
        return getFiltredPodcastsByName(podcasts, filter);
    }, [filter, getFiltredPodcastsByName, podcasts]);

    if (isFetching) {
        headerContext?.setIsLoading(isFetching);
        return <></>;
    }
    headerContext?.setIsLoading(false);

    return (
        <section className={styles.sectionContainer}>

            <FilterPodcasts setFilter={setFilter} filter={filter} podcastsLength={filtredPodcasts.length} />
            <PodcastsList podcasts={filtredPodcasts} />
        </section>
    )
}

export default PodcastsSection;

