import styles from './EpisodeDetailsSection.module.css'

type TEpisodeDetailsSection = {
    episodeid: string;
    podcastid: string;
}

const EpisodeDetialsSection: React.FC<TEpisodeDetailsSection> = ({ episodeid, podcastid }) => {

    
    return (
        <section className={styles.sectionContainer}>
            {/* <PodcastDetailsCard
                name={podcastDetails.trackName}
                artist={podcastDetails.artistName}
                image={podcastDetails.artworkUrl600}
                description={podcastDetails.trackExplicitness}
            /> */}

        </section>
    )
}

export default EpisodeDetialsSection;

