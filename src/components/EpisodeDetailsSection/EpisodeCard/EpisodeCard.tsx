import styles from './EpisodeCard.module.css'

type TEpisodeCard = {
    episode: any;
}

const EpisodeCard: React.FC<TEpisodeCard> = ({ episode }) => {

    return <div className={styles.mainContainer}>

    </div>
}
export default EpisodeCard;