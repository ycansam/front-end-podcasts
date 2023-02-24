import React, { useState } from 'react'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import PodcastDetailsSection from '@/components/PodcastDetailsSection/PodcastDetailsSection'
import PodcastHooks from './hooks/podcast.hooks'
import HeaderContext from '@/components/Header/context/Header.context'
import HeaderHooks from '@/components/Header/hooks/Header.hooks'


const PodcastPage = () => {

    const { podcastid, podcastFound } = PodcastHooks();
    const { isLoading, setIsLoading } = HeaderHooks();

    return podcastid && podcastFound && (
        <HeaderContext.Provider value={{ setIsLoading, isLoading }}>
            <Head>
                <title>Podcaster - Podcast</title>
            </Head>
            <Header />
            <PodcastDetailsSection podcastid={podcastid} />
        </HeaderContext.Provider>
    )
}
export default PodcastPage;