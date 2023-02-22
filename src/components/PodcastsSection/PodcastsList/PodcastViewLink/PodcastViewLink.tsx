
import styles from './PodcastViewLink.module.css'
import Link from 'next/link';

type TPodcastView = {
    id: string;
    image: string;
    name: string;
    artist: string;
}

const PodcastViewLink: React.FC<TPodcastView> = ({ id, image, name, artist }) => {

    return (
        <Link href={'/'} className={styles.mainContainer}>
            <img alt="imagen del podcast" src={image} className={styles.image}></img>
            <h1 className={styles.name}>{name}</h1>
            <h2 className={styles.author}>Author: {artist}</h2>
        </Link>
    )
}

export default PodcastViewLink;

