import PodcastDetailsCard from '../PodcastDetailsCard/PodcastDetailsCard';
import styles from './PodcastDetailsSection.module.css'
import PodcastDetailsHooks from './hooks/PodcastDetailsSection.hooks';
import TPodcastDetails from '@/types/TPodcastDetails';
type TPodcastDetailsSection = {
    podcastid: string;
}

type PodcastsListHooksReturn = {
    podcastDetails: TPodcastDetails;
    isFetching: boolean;
};

const PodcastDetailsSection: React.FC<TPodcastDetailsSection> = ({ podcastid }) => {
    const { podcastDetails, isFetching }: PodcastsListHooksReturn = PodcastDetailsHooks(podcastid);

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

export default PodcastDetailsSection;

