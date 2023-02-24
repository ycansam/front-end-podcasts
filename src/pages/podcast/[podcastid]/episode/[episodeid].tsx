import React from 'react'
import Header from '@/components/Header/Header'
import EpisodeDetialsSection from '@/components/EpisodeDetailsSection/EpisodeDetailsSection'
import Head from 'next/head'
import EpisodeHooks from './hooks/episode.hooks'
import HeaderContext from '@/components/Header/context/Header.context'
import HeaderHooks from '@/components/Header/hooks/Header.hooks'
type EpisodeHooksReturn = [
    boolean,
    boolean,
    string,
]

const EpisodePage = () => {

    const arrHooks = EpisodeHooks();
    const [podcastFound, episodeFound, episodeid] = EpisodeHooks() as EpisodeHooksReturn;

    const { setIsLoading, isLoading } = HeaderHooks();
    // anyNotFound corresponde a podcast y episodio. Si uno de los dos no se encuentra, no se renderiza
    return podcastFound && episodeFound && episodeid && (
        <div>
            <Head>
                <title>Podcaster - Podcast Episode</title>
            </Head>
            <HeaderContext.Provider value={{ setIsLoading, isLoading }}>
                <Header />
                <EpisodeDetialsSection episodeid={episodeid} />
            </HeaderContext.Provider>
        </div>
    )
}
export default EpisodePage;