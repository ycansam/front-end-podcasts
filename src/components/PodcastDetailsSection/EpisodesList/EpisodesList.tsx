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
            <table className={styles.tableEpisodes}>
                <tr>
                    <th className={styles.thTitle}>Title</th>
                    <th>Date</th>
                    <th>Duration</th>
                </tr>
                {episodes.map((episode, index) => {
                    return <tr key={index} >
                        <td>{episode.trackName}</td>
                        <td>{episode.releaseDate}</td>
                        <td>{episode.trackTimeMillis}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default EpisodesList;

