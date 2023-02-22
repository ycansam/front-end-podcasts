'use client';
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import podcastsService from '@/services/podcasts.service'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    podcastsService.getLimitedPodcastsByGenre(100, 1310)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <>
      <Head>
        <title>Podcaster</title>
        <meta name="description" content="Pagina web de podcasts de apple" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      </main>
    </>
  )
}
