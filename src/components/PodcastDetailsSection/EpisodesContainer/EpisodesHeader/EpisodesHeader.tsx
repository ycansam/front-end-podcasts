import PodcastContext from '../../contexts/PodcastDetailsSection.context';
import { useContext } from 'react';
import TPodcastContext from '../../types/TPodcastContext';

const EpisodesHeader: React.FC = () => {
    const { episodesLength } = useContext(PodcastContext) as TPodcastContext;
    return (
        <header>
            <h1>Episodes: {episodesLength}</h1>
        </header>
    )
}
export default EpisodesHeader;