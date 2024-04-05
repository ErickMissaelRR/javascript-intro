import axios from "axios";

const API_KEY = "e3a6oWW015jnK1FqhYf18QaX4ny6WDui";

const api_endpoint = "https://api.giphy.com/v1/gifs";

export const giphyAPI = axios.create({
    baseURL: api_endpoint,
    params: {
        api_key: API_KEY
    }
})

// giphyAPI.get('/random')
//     .then( resp => {
//         const { url } = resp.data.data.images.original;
    
//         const img = document.createElement('img')
//         img.src = url;

//         document.body.append(img);
//     })