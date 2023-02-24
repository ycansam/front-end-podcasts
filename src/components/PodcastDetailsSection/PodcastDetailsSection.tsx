import PodcastDetailsCard from '../PodcastDetailsCard/PodcastDetailsCard';
import EpisodesList from './EpisodesList/EpisodesList';
import styles from './PodcastDetailsSection.module.css'
import PodcastDetailsHooks from './hooks/PodcastDetailsSection.hooks';
import TPodcastEpisode from '@/types/TPodcastEpisode';
import PodcastContext from './contexts/PodcastDetailsSection.context';
import podcastsStorageService from '@/services/podcastsStorage.service';
import TPodcast from '@/types/TPodcast';
type TPodcastDetailsSection = {
    podcastid: string;
}

type PodcastsListHooksReturn = {
    podcastDetails: TPodcast;
    podcastsEpisodes: TPodcastEpisode[];
    isFetchingDetails: boolean;
    isFetchingEpisodes: boolean;
};

const PodcastDetailsSection: React.FC<TPodcastDetailsSection> = ({ podcastid }) => {
    const { podcastDetails, podcastsEpisodes, isFetchingDetails, isFetchingEpisodes }: PodcastsListHooksReturn = PodcastDetailsHooks(podcastid);

    if (isFetchingDetails || isFetchingEpisodes)
        return <p>is loading...</p>

    podcastsStorageService.savePodcastAndEpisodes1Day({ podcastDetails, episodes: podcastsEpisodes })

    return (
        <section className={styles.sectionContainer}>
            <PodcastDetailsCard
                podcastid={podcastDetails.id.attributes['im:id']}
                name={podcastDetails['im:name'].label}
                artist={podcastDetails['im:artist'].label}
                image={podcastDetails['im:image'][2].label}
                description={podcastDetails.summary.label}
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

