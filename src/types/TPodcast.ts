
// Modelo podcast extraido de la peticion
type TPodcast = {
    category: {
        attributes: {
            "im:id": string;
            label: string;
            scheme: string;
            term: string;
        }
    }
    id: {
        attributes: {
            "im:id": string;
            label: string;
        }
    };
    "im:image": Array<{
        label: string;
        attributes: {
            height: string;
        }
    }>;
    "im:contentType": {
        attributes: {
            label: string;
            term: string;
        }
    };
    "im:name": {
        label: string;
    };
    "im:price": {
        label: string;
        attributes: {
            amount: string;
            currency: string;
        }
    };
    "im:artist": {
        label: string;
    };
    "im:releaseDate": {
        attributes: {
            label: string;
        }
        label: string;
    };
    link: {
        attributes: {
            href: string;
            rel: string;
            type: string;
        }
    }
    rights: {
        label: string
    }
    summary: {
        label: string;
    }
    title: {
        label: string;
    }
}

export default TPodcast;