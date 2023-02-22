import Link from "next/link"
import styles from './Header.module.css'
const Header: React.FC = () => {
    return (
        <nav className={styles.navContainer}>
            <Link href={'/'}><h1 className={styles.title}>Podcaster</h1></Link>
            <div className={styles.circle}></div>
        </nav>
    )
}

export default Header;

