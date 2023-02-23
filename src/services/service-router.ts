import axios from "axios";

export default axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/",
    headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'X-Requested-With': 'XMLHttpRequest'
    }
});