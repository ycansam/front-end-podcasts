import styles from './EpisodesList.module.css'
import TPodcastEpisode from '@/types/TPodcastEpisode'

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
            <ul className={styles.ulEpisodes}>
                {/* Genera un PodcastViewLink por cada uno de los podcast del array */}
                {episodes.map((episodes, index: number) => {
                    return <li key={index}>

                    </li>
                })}
            </ul>
        </div>
    )
}

export default EpisodesList;

