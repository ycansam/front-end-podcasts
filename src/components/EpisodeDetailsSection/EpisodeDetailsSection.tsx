import styles from './EpisodeDetailsSection.module.css'
import EpisodeDetailsHooks from './hooks/EpisodeDetails.hooks'
import PodcastDetailsCard from '../PodcastDetailsCard/PodcastDetailsCard'
import TPodcastDetails from '@/types/TPodcastDetails'
import EpisodeCard from './EpisodeCard/EpisodeCard'

type TEpisodeDetailsSection = {
    episodeid: string;
    podcastid: string;
}

type EpisodeDetailsHooksReturn = {
    podcastDetails: TPodcastDetails;
    isFetchingPodcastDetails: boolean;
}

const EpisodeDetialsSection: React.FC<TEpisodeDetailsSection> = ({ podcastid, episodeid }) => {

    const { podcastDetails, isFetchingPodcastDetails }: EpisodeDetailsHooksReturn = EpisodeDetailsHooks(podcastid, episodeid);

    if (isFetchingPodcastDetails)
        return <p>...Loading</p>

    return (
        <section className={styles.sectionContainer}>
            <PodcastDetailsCard
                name={podcastDetails.trackName}
                artist={podcastDetails.artistName}
                image={podcastDetails.artworkUrl600}
                description={podcastDetails.trackExplicitness}
            />
            <EpisodeCard episode={""}/>

        </section>
    )
}

export default EpisodeDetialsSection;

