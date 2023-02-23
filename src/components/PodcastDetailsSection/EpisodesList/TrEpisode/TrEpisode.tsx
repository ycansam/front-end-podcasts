import styles from './TrEpisode.module.css';
import Link from "next/link";
import { useContext } from "react";
import PodcastContext from "../../contexts/PodcastDetailsSection.context";
import dateUtils from "@/utils/date.utils";
import TPodcastEpisode from "@/types/TPodcastEpisode";

type TTrEpisode = {
    index: number;
    episode: TPodcastEpisode;
}
type TContextPodcastDetails = {
    podcastid: string;
}

// Componente fila individual para cada uno de los episodios
const TrEpisode: React.FC<TTrEpisode> = ({ index, episode: { trackId, trackName, trackTimeMillis, releaseDate } }) => {

    const { podcastid } = useContext(PodcastContext) as TContextPodcastDetails;

    // Si es impar el fondo es mas oscuro
    const isOdd = index % 2 && styles.oddBackgroundColorRowEpisode;

    return <tr className={[isOdd, styles.trEpisodes].join(' ')}>
        <td>
            <Link href={`/podcast/${podcastid}/episode/${trackId}`}>{trackName}</Link>
        </td>
        <td>{dateUtils.parseDateToYearMonthDate(releaseDate)}</td>
        <td>{dateUtils.parseMillisToHoursMinutesSeconds(trackTimeMillis)}</td>
    </tr>
}
export default TrEpisode;