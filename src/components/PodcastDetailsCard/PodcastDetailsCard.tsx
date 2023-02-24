/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './PodcastDetailsCard.module.css'

type TPodcastDetailsCard = {
    podcastid: string;
    image: string;
    name: string;
    artist: string;
    description: string;
};

const PodcastDetailsCard: React.FC<TPodcastDetailsCard> = ({ podcastid, image, name, artist, description }) => {

    return (
        <div className={styles.cardContainer}>
            <Link href={`/podcast/${podcastid}`}><img className={styles.image} src={image} alt="imagen del podcast"></img></Link>
            <div className={styles.containerTitles}>
                <h1 className={styles.name}><Link href={`/podcast/${podcastid}`}>{name}</Link></h1>
                <h2 className={styles.artist}>by {artist}</h2>
            </div>
            <div>
                <h3 className={styles.descriptionTitle}>Description</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default PodcastDetailsCard;

