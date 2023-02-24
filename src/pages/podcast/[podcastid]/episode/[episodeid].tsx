import React from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header/Header'
import EpisodeDetialsSection from '@/components/EpisodeDetailsSection/EpisodeDetailsSection'
import Head from 'next/head'
type TEpisodePageQuery = {
    podcastid: string;
    episodeid: string;
}

const EpisodePage = () => {

    const router = useRouter()
    const { episodeid } = router.query as TEpisodePageQuery;

    if (episodeid)
        return (
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