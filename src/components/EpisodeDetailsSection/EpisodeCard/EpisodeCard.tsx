/* eslint-disable react/no-danger-with-children */
import AudioPlayer from './AudioPlayer/AudioPlayer';
import styles from './EpisodeCard.module.css'

type TEpisodeCard = {
    title: string;
    description: string;
    audiourl: string;
}

const EpisodeCard: React.FC<TEpisodeCard> = ({ title, description, audiourl }) => {

    return <div className={styles.containerEpisode}>
        <div className={styles.divTexts}>
            <h1 className={styles.title}>{title}</h1>
            {/* Evitamos el texto escarpado */}
            <p dangerouslySetInnerHTML={{ __html: description }} className={styles.description}></p>
        </div>
        <AudioPlayer audiourl={audiourl} />
    </div>
}
export default EpisodeCard;