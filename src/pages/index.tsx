import Head from 'next/head'
import styles from '@/styles/LandingPage.module.css'
import Header from '@/components/Header/Header'
import TopPodcastsSection from '@/components/TopPodcastsSection/TopPodcastsSection'
export default function LandingPage() {

  return (
    <>
      <Head >
        <title>Podcaster</title>
        <meta name="description" content="Pagina web de podcasts de apple" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <TopPodcastsSection />
      </main>
    </>
  )
}
