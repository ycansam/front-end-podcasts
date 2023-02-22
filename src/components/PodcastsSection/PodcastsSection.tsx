import Link from "next/link"
import styles from './PodcastsSection.module.css'
import PodcastsList from "./PodcastsList/PodcastsList"
const PodcastsView: React.FC = () => {



    return (
        <section className={styles.sectionContainer}>
            {/* Aqui deberia ir el filtro */}
            <PodcastsList />
        </section>
    )
}

export default PodcastsView;

