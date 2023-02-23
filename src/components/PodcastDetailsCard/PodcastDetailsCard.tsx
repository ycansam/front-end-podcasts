/* eslint-disable jsx-a11y/alt-text */
import styles from './PodcastDetailsCard.module.css'

type TPodcastDetailsCard = {
    image: string;
    name: string;
    artist: string;
    description: string;
};

const PodcastDetailsCard: React.FC<TPodcastDetailsCard> = ({ image, name, artist, description }) => {

    return (
        <div className={styles.cardContainer}>
            <img src={image}></img>
            <div className={styles.containerTitles}>
                <h1 className={styles.name}>{name}</h1>
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

