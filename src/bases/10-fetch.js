const API_KEY = "e3a6oWW015jnK1FqhYf18QaX4ny6WDui";

const api_endpoint = "https://api.giphy.com/v1/gifs/random";

fetch(`${api_endpoint}?api_key=${API_KEY}`)
  .then( res => res.json())
  .then( ({data})=> {
    const { url } = data.images.original;
    
    const img = document.createElement('img')
    img.src = url;

    document.body.append(img);
  })
  .catch(console.log);
