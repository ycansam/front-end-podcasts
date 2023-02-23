import TPodcastEpisode from "@/types/TPodcastEpisode"
import styles from './TableEpisodes.module.css'
import TrEpisode from "../TrEpisode/TrEpisode"

type TTableEpisodes = {
    episodes: TPodcastEpisode[];
}

const TableEpisodes: React.FC<TTableEpisodes> = ({ episodes }) => {

    return <table className={styles.tableEpisodes}>
        <thead>
            <tr>
                <th className={styles.thTitle}>Title</th>
                <th>Date</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            {episodes.map((episode, index) => {
                // pasamos las propiedades necesarias del episodio con {...episode}
                return <TrEpisode key={index} index={index} episode={{ ...episode }} />
            })}
        </tbody>
    </table>
}
export default TableEpisodes;