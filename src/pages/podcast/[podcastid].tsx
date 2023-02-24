import Header from '@/components/Header/Header'
import Head from 'next/head'
import PodcastDetailsSection from '@/components/PodcastDetailsSection/PodcastDetailsSection'
import HeaderContext from '@/components/Header/context/Header.context'
import HeaderHooks from '@/components/Header/hooks/Header.hooks'
import PodcastHooks from './hooks/podcast.hooks'

type TPodcastHooksReturn = [string, boolean]

const PodcastPage = () => {
    const [podcastid, podcastFound] = PodcastHooks() as TPodcastHooksReturn;

    const { isLoading, setIsLoading } = HeaderHooks();

    if (podcastFound)
        return (
            <HeaderContext.Provider value={{ setIsLoading, isLoading }}>
                <div>
                    <Head>
                        <title>Podcaster - Podcast</title>
                    </Head>
                    <Header />
                    <PodcastDetailsSection podcastid={podcastid} />
                </div>
            </HeaderContext.Provider>
        )
}
export default PodcastPage;