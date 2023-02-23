type TPodcastEpisode = {
    country: string;
    artworkUrl600: string;
    artworkUrl160: string;
    episodeFileExtension: string;
    episodeContentType: string;
    closedCaptioning: string;
    collectionId: number;
    collectionName: string;
    genres: {
        name: string;
        id: string;
    }[];
    episodeGuid: string;
    description: string;
    releaseDate: string;
    trackId: number;
    trackName: string;
    shortDescription: string;
    previewUrl: string;
    artistIds: number[];
    feedUrl: string;
    collectionViewUrl: string;
    trackTimeMillis: number;
    artworkUrl60: string;
    artistViewUrl: string;
    trackViewUrl: string;
    contentAdvisoryRating: string;
    episodeUrl: string;
    kind: string;
    wrapperType: string;
}
export default TPodcastEpisode;