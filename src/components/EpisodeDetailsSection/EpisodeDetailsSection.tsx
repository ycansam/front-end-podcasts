import styles from './EpisodeDetailsSection.module.css'
import EpisodeDetailsHooks from './hooks/EpisodeDetails.hooks'
import PodcastDetailsCard from '../PodcastDetailsCard/PodcastDetailsCard'
import TPodcastDetails from '@/types/TPodcastDetails'
import EpisodeCard from './EpisodeCard/EpisodeCard'
import TPodcastEpisode from '@/types/TPodcastEpisode'

type TEpisodeDetailsSection = {
    episodeid: string;
    podcastid: string;
}

type EpisodeDetailsHooksReturn = {
    podcastDetails: TPodcastDetails;
    isFetchingPodcastDetails: boolean;
    episodeDetails: TPodcastEpisode;
}

const EpisodeDetialsSection: React.FC<TEpisodeDetailsSection> = ({ podcastid, episodeid }) => {

    const { podcastDetails, isFetchingPodcastDetails, episodeDetails }: EpisodeDetailsHooksReturn = EpisodeDetailsHooks(podcastid, episodeid);
    console.log(podcastDetails);
    if (isFetchingPodcastDetails)
        return <p>...Loading</p>
    return (
        <section className={styles.sectionContainer}>
            <PodcastDetailsCard
                podcastid={podcastDetails.trackId}
                name={podcastDetails.trackName}
                artist={podcastDetails.artistName}
                image={podcastDetails.artworkUrl600}
                description={podcastDetails.trackExplicitness}
            />
            <EpisodeCard
                title={episodeDetails.trackName}
                description={episodeDetails.description}
                audiourl={episodeDetails.episodeUrl}
            />

        </section>
    )
}

export default EpisodeDetialsSection;

