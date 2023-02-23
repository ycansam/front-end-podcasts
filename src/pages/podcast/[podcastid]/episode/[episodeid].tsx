import React from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header/Header'
import EpisodeDetialsSection from '@/components/EpisodeDetailsSection/EpisodeDetailsSection'

const PodcastPage = () => {
    const router = useRouter()
    const episodeid = router.query.episodeid as string;

    if (episodeid)
        return (
            <div>
                <Header />
                <EpisodeDetialsSection episodeid={episodeid} podcastDetails={{}} />
            </div>
        )
}
export default PodcastPage;