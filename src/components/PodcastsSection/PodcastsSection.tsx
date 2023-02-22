import styles from './PodcastsSection.module.css'
import PodcastsList from "./PodcastsList/PodcastsList"
import FilterPodcasts from './FilterPodcasts/FilterPodcasts';
import PodcastsListHooks from './PodcastsList/hooks/PodcastsList.hooks';

const PodcastsSection: React.FC = () => {

    const { podcasts, isFetching } = PodcastsListHooks();

    if (isFetching)
        return <p>is loading...</p>

    return (
        <section className={styles.sectionContainer}>
            {/* Aqui deberia ir el filtro */}
            <FilterPodcasts />
            <PodcastsList podcasts={podcasts} />
        </section>
    )
}

export default PodcastsSection;

