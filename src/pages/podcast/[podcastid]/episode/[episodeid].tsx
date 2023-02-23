import React from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header/Header'
import EpisodeDetialsSection from '@/components/EpisodeDetailsSection/EpisodeDetailsSection'

type TEpisodePageQuery = {
    podcastid: string;
    episodeid: string;
}

const EpisodePage = () => {

    const router = useRouter()
    const { podcastid, episodeid } = router.query as TEpisodePageQuery;

    if (episodeid)
        return (
            <div>
                <Header />
                <EpisodeDetialsSection episodeid={episodeid} podcastid={podcastid} />
            </div>
        )
}
export default EpisodePage;