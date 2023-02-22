import React, { Dispatch, SetStateAction } from 'react';
import styles from './FilterPodcasts.module.css'

type TPropsFilter = {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
    podcastsLength: number;
}

const FilterPodcasts: React.FC<TPropsFilter> = ({ filter, setFilter, podcastsLength }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter((prevState) => (event.target.value));
    }

    return (
        <div className={styles.containerFilter} >
            <span className={styles.podcastsLength}>{podcastsLength}</span>
            <input className={styles.filter} name='filter' placeholder='Filter Podcasts...' value={filter} onChange={handleChange}></input>
        </div>
    )

}


export default FilterPodcasts;