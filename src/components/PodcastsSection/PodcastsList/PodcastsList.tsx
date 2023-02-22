import styles from './PodcastsList.module.css'
import PodcastViewLink from "./PodcastViewLink/PodcastViewLink";

type TPodcastFetched = {
    id: {
        attributes: {
            "im:id": string;
        }
    };
    "im:image": Array<{
        label: string;
    }>;
    "im:name": {
        label: string;
    };
    "im:artist": {
        label: string;
    };
}

type TPodcastsArray = {
    podcasts: TPodcastFetched[];
}

const PodcastsList: React.FC<TPodcastsArray> = ({ podcasts }) => {

    return (
        <ul className={styles.ulPodcasts}>
            {/* Genera un PodcastViewLink por cada uno de los podcast del array */}
            {podcasts.map((podcast, index: number) => {
                return <li key={index}>
                    <PodcastViewLink
                        id={podcast.id.attributes["im:id"]}
                        image={podcast["im:image"][2].label}
                        name={podcast["im:name"].label}
                        artist={podcast["im:artist"].label}
                    />
                </li>
            })}
        </ul>
    )
}

export default PodcastsList;

