import React from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import PodcastDetailsSection from '@/components/PodcastDetailsSection/PodcastDetailsSection'
const PodcastPage = () => {
    const router = useRouter()
    const podcastid = router.query.podcastid as string;

    if (podcastid)
        return (
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