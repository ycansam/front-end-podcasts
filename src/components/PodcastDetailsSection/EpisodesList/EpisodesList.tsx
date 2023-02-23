import Link from 'next/link';
import styles from './EpisodesList.module.css'
import TPodcastEpisode from '@/types/TPodcastEpisode'
import dateUtils from '@/utils/date.utils';
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
                <table className={styles.tableEpisodes}>
                    <tr >
                        <th className={styles.thTitle}>Title</th>
                        <th>Date</th>
                        <th>Duration</th>
                    </tr>
                    {episodes.map((episode, index) => {
                        const isOdd = index % 2 ? styles.oddBackgroundColorRowEpisode : '';
                        return <tr key={index} className={[isOdd, styles.trEpisodes].join(' ')}>
                            <td><Link href={'/'}>{episode.trackName}</Link></td>
                            <td>{dateUtils.parseDateToYearMonthDate(episode.releaseDate)}</td>
                            <td>{dateUtils.parseMillisToHoursMinutesSeconds(episode.trackTimeMillis)}</td>
                        </tr>
                    })}
                </table>
            </div>
        </div >
    )
}

export default EpisodesList;

