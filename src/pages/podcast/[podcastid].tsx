import React from 'react'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import PodcastDetailsSection from '@/components/PodcastDetailsSection/PodcastDetailsSection'
import PodcastHooks from './hooks/podcast.hooks'
const PodcastPage = () => {
    
    const { podcastid, podcastNotFound } = PodcastHooks();

    return podcastid && !podcastNotFound && (
        <div>
            <Head>
                <title>Podcaster - Podcast</title>
            </Head>
            <Header />
            <PodcastDetailsSection podcastid={podcastid} />
        </div>
    )
}
export default PodcastPage;