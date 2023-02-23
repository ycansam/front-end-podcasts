import TPodcast from "@/types/TPodcast";

const PodcastsSectionServices: any = () => {

    const getFiltredPodcastsByName = (podcasts: TPodcast[], filter: string) => {
        return podcasts.filter((podcast) => {

            const name = podcast["im:name"].label;

            // En caso de que el nombre del podcast contenga el filtro introducido devuelve el podcast
            return name.toLowerCase().includes(filter.toLowerCase()) && podcast;
        });
    }

    return { getFiltredPodcastsByName }
}

export default PodcastsSectionServices;

