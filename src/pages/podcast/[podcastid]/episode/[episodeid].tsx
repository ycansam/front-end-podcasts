import React from 'react'
import Header from '@/components/Header/Header'
import EpisodeDetialsSection from '@/components/EpisodeDetailsSection/EpisodeDetailsSection'
import Head from 'next/head'
import EpisodeHooks from './hooks/episode.hooks'

type EpisodeHooksReturn = {
    episodeid: string;
    anyNotFound: boolean;
}

const EpisodePage = () => {

    const { episodeid, anyNotFound }: EpisodeHooksReturn = EpisodeHooks()

    // anyNotFound corresponde a podcast y episodio. Si uno de los dos no se encuentra, no se renderiza
    return !anyNotFound && episodeid && (
        <div>
            <Head>
                <title>Podcaster - Podcast Episode</title>
            </Head>
            <Header />
            <EpisodeDetialsSection episodeid={episodeid} />
        </div>
    )
}
export default EpisodePage;