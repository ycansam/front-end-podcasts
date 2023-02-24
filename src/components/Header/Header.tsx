import Link from "next/link"
import styles from './Header.module.css'

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Header: React.FC = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, []);
  
    return (
        <nav className={styles.navContainer}>
            <Link href={'/'}><h1 className={styles.title}>Podcaster</h1></Link>
            {loading && <div className={styles.circle}></div>}
        </nav>
    )
}

export default Header;

