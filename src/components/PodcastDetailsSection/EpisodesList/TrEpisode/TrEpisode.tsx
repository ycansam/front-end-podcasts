import styles from './TrEpisode.module.css';
import Link from "next/link";
import { useContext } from "react";
import PodcastContext from "../../contexts/PodcastDetailsSection.context";
import dateUtils from "@/utils/date.utils";
import TPodcastDetails from "@/types/TPodcastDetails";
import TPodcastEpisode from "@/types/TPodcastEpisode";

type TTrEpisode = {
    index: number;
    episode: TPodcastEpisode;
}
type TContextPodcastDetails = {
    podcastDetails: TPodcastDetails;
}

// Componente fila individual para cada uno de los episodios
const TrEpisode: React.FC<TTrEpisode> = ({ index, episode: { trackId, trackName, trackTimeMillis, releaseDate } }) => {

    const { podcastDetails } = useContext(PodcastContext) as TContextPodcastDetails;

    const isOdd = index % 2 ? styles.oddBackgroundColorRowEpisode : '';

    return <tr className={[isOdd, styles.trEpisodes].join(' ')}>
        <td>
            <Link href={{
                pathname: `/podcast/${podcastDetails.trackId}/episode/${trackId}`,
                // Pasamos los datos del podcast en string para poder pasarlos todos
                query: { podcastDetails: JSON.stringify(podcastDetails) }
            }}>{trackName}</Link>
        </td>
        <td>{dateUtils.parseDateToYearMonthDate(releaseDate)}</td>
        <td>{dateUtils.parseMillisToHoursMinutesSeconds(trackTimeMillis)}</td>
    </tr>
}
export default TrEpisode;