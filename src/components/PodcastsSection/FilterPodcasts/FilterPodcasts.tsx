import React, { Dispatch, SetStateAction, forwardRef, useState } from 'react';

type TPropsFilter = {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
}

const FilterPodcasts: React.FC<TPropsFilter> = ({ filter, setFilter }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter((prevState) => (event.target.value));
    }

    return (
        <input name='filter' placeholder='Filter Podcasts...' value={filter} onChange={handleChange}></input>
    )

}


export default FilterPodcasts;