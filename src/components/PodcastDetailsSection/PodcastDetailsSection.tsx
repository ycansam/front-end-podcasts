import PodcastDetailsCard from '../PodcastDetailsCard/PodcastDetailsCard';
import EpisodesContainer from './EpisodesContainer/EpisodesContainer';
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
            {/* context pasando el podcastid para poder hacer la navegacion y no tener que crear muchos router para obtener el parametro*/}
            <PodcastContext.Provider value={{ podcastid, episodesLength: podcastDetails.trackCount }}>
                <EpisodesContainer
                    episodes={podcastsEpisodes}
                />
            </PodcastContext.Provider>
        </section>
    )
}

export default PodcastDetailsSection;

