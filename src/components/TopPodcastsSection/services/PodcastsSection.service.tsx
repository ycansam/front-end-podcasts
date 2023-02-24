import TPodcast from "@/types/TPodcast";

const isIncludedIn = (inword: string, filter: string) => {
    return inword.toLowerCase().includes(filter.toLowerCase());
}

const PodcastsSectionServices: any = () => {

    const getFiltredPodcastsByName = (podcasts: TPodcast[], filter: string) => {
        return podcasts.filter((podcast) => {

            const name = podcast["im:name"].label;
            const artist = podcast["im:artist"].label;
            if (isIncludedIn(name, filter) || isIncludedIn(artist, filter))
                // En caso de que el nombre del podcast o del autor contenga el filtro introducido devuelve el podcast
                return podcast;
        });
    }

    return { getFiltredPodcastsByName }
}

export default PodcastsSectionServices;

