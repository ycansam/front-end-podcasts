import PodcastDetailsCard from '../PodcastDetailsCard/PodcastDetailsCard';
import EpisodesList from './EpisodesList/EpisodesList';
import styles from './PodcastDetailsSection.module.css'
import PodcastDetailsHooks from './hooks/PodcastDetailsSection.hooks';
import TPodcastDetails from '@/types/TPodcastDetails';
import TPodcastEpisode from '@/types/TPodcastEpisode';
import PodcastContext from './contexts/PodcastDetailsSection.context';
import podcastsStorageService from '@/services/podcastsStorage.service';
type TPodcastDetailsSection = {
    podcastid: string;
}

type PodcastsListHooksReturn = {
    podcastDetails: TPodcastDetails;
    podcastsEpisodes: TPodcastEpisode[];
    isFetchingDetails: boolean;
    isFetchingEpisodes: boolean;
    hasFetchedDataByOneDay: boolean; // si se ha hecho fetch lo que significa que ha pasado 1 dia o la variable existia se guardaran los nuevos datos
};

const PodcastDetailsSection: React.FC<TPodcastDetailsSection> = ({ podcastid }) => {
    const { podcastDetails, podcastsEpisodes, isFetchingDetails, isFetchingEpisodes, hasFetchedDataByOneDay }: PodcastsListHooksReturn = PodcastDetailsHooks(podcastid);

    if (isFetchingDetails || isFetchingEpisodes)
        return <p>is loading...</p>

    if (hasFetchedDataByOneDay) {
        podcastsStorageService.savePodcastAndEpisodes1Day(podcastDetails.trackId.toString(), { podcastDetails, episodes: podcastsEpisodes })
    }

    return (
        <section className={styles.sectionContainer}>
            <PodcastDetailsCard
                name={podcastDetails.trackName}
                artist={podcastDetails.artistName}
                image={podcastDetails.artworkUrl600}
                description={podcastDetails.trackExplicitness}
            />
            {/* context pasando el podcastid para poder hacer la navegacion */}
            <PodcastContext.Provider value={{ podcastid }}>
                <EpisodesList
                    episodes={podcastsEpisodes}
                    episodesLength={podcastDetails.trackCount}
                />
            </PodcastContext.Provider>
        </section>
    )
}

export default PodcastDetailsSection;

