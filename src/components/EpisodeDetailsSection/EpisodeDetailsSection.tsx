import PodcastDetailsCard from '../PodcastDetailsCard/PodcastDetailsCard';
import styles from './EpisodeDetailsSection.module.css'
import TPodcastDetails from '@/types/TPodcastDetails';

type TEpisodeDetailsSection = {
    episodeid: string;
    podcastDetails: any;
}

const EpisodeDetialsSection: React.FC<TEpisodeDetailsSection> = ({ episodeid, podcastDetails }) => {

    return (
        <section className={styles.sectionContainer}>
            <PodcastDetailsCard
                name={podcastDetails.trackName}
                artist={podcastDetails.artistName}
                image={podcastDetails.artworkUrl600}
                description={podcastDetails.trackExplicitness}
            />

        </section>
    )
}

export default EpisodeDetialsSection;

