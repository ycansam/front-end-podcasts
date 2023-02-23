import PodcastDetailsCard from '../PodcastDetailsCard/PodcastDetailsCard';
import EpisodesList from './EpisodesList/EpisodesList';
import styles from './PodcastDetailsSection.module.css'
import PodcastDetailsHooks from './hooks/PodcastDetailsSection.hooks';
import TPodcastDetails from '@/types/TPodcastDetails';
import TPodcastEpisode from '@/types/TPodcastEpisode';

type TPodcastDetailsSection = {
    podcastid: string;
}

type PodcastsListHooksReturn = {
    podcastDetails: TPodcastDetails;
    podcastsEpisodes: TPodcastEpisode[];
    isFetchingDetails: boolean;
    isFetchingEpisodes: boolean;
};

const PodcastDetailsSection: React.FC<TPodcastDetailsSection> = ({ podcastid }) => {
    const { podcastDetails, podcastsEpisodes, isFetchingDetails, isFetchingEpisodes }: PodcastsListHooksReturn = PodcastDetailsHooks(podcastid);

    if (isFetchingDetails || isFetchingEpisodes)
        return <p>is loading...</p>

    return (
        <section className={styles.sectionContainer}>
            <PodcastDetailsCard
                name={podcastDetails.trackName}
                artist={podcastDetails.artistName}
                image={podcastDetails.artworkUrl600}
                description={podcastDetails.trackExplicitness}
            />
            <EpisodesList
                episodes={podcastsEpisodes}
                episodesLength={podcastDetails.trackCount}
            />
        </section>
    )
}

export default PodcastDetailsSection;

