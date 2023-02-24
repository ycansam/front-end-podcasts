import styles from './EpisodeDetailsSection.module.css'
import EpisodeDetailsHooks from './hooks/EpisodeDetails.hooks'
import PodcastDetailsCard from '../PodcastDetailsCard/PodcastDetailsCard'
import TPodcastDetails from '@/types/TPodcastDetails'
import EpisodeCard from './EpisodeCard/EpisodeCard'
import TPodcastEpisode from '@/types/TPodcastEpisode'
import TPodcast from '@/types/TPodcast'

type TEpisodeDetailsSection = {
    episodeid: string;
    podcastid: string;
}

type EpisodeDetailsHooksReturn = {
    podcastDetails: TPodcast;
    isFetchingPodcastDetails: boolean;
    episodeDetails: TPodcastEpisode;
}

const EpisodeDetialsSection: React.FC<TEpisodeDetailsSection> = ({ podcastid, episodeid }) => {

    const { podcastDetails, isFetchingPodcastDetails, episodeDetails }: EpisodeDetailsHooksReturn = EpisodeDetailsHooks(podcastid, episodeid);
    if (isFetchingPodcastDetails)
        return <p>...Loading</p>

    return (
        <section className={styles.sectionContainer}>
            <PodcastDetailsCard
                podcastid={podcastDetails.id.attributes['im:id']}
                name={podcastDetails['im:name'].label}
                artist={podcastDetails['im:artist'].label}
                image={podcastDetails['im:image'][2].label}
                description={podcastDetails.summary.label}
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

