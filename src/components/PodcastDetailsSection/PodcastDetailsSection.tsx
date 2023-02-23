import styles from './PodcastDetailsSection.module.css'
import PodcastDetailsHooks from './hooks/PodcastDetailsSection.hooks';

type TPodcastDetailsSection = {
    podcastid: string;
}
type PodcastsListHooksReturn = {
    podcast: any;
    isFetching: boolean;
};

const PodcastDetailsSection: React.FC<TPodcastDetailsSection> = ({ podcastid }) => {
    const { podcast, isFetching }: PodcastsListHooksReturn = PodcastDetailsHooks(podcastid);

    return (
        <section className={styles.sectionContainer}>

        </section>
    )
}

export default PodcastDetailsSection;

