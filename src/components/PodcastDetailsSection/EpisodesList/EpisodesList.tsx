import styles from './EpisodesList.module.css'
import TPodcastEpisode from '@/types/TPodcastEpisode'
import TableEpisodes from './TableEpisodes/TableEpisodes';

type TEpisodesArray = {
    episodes: TPodcastEpisode[];
    episodesLength: number;
}

const EpisodesList: React.FC<TEpisodesArray> = ({ episodes, episodesLength }) => {

    return (
        <div className={styles.mainContainer}>
            <header>
                <h1>Episodes: {episodesLength}</h1>
            </header>
            <div className={styles.containerTable}>
                <TableEpisodes episodes={episodes} />
            </div>
        </div >
    )
}

export default EpisodesList;

