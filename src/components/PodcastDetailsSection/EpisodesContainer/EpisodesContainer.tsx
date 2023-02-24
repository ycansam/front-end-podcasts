import styles from './EpisodesContainer.module.css'
import TPodcastEpisode from '@/types/TPodcastEpisode'
import TableEpisodes from './TableEpisodes/TableEpisodes';
import EpisodesHeader from './EpisodesHeader/EpisodesHeader';

type TEpisodesContainer = {
    episodes: TPodcastEpisode[];
}

const EpisodesContainer: React.FC<TEpisodesContainer> = ({ episodes }) => {

    return (
        <div className={styles.mainContainer}>
            <EpisodesHeader />
            <div className={styles.containerTable}>
                <TableEpisodes episodes={episodes} />
            </div>
        </div >
    )
}

export default EpisodesContainer;

