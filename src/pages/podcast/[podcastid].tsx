import React from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header/Header'
import PodcastDetailsSection from '@/components/PodcastDetailsSection/PodcastDetailsSection'
const PodcastPage = () => {
    const router = useRouter()
    const podcastid = router.query.podcastid as string;

    if (podcastid)
        return (
            <div>
                <Header />
                <PodcastDetailsSection podcastid={podcastid} />
            </div>
        )
}
export default PodcastPage;