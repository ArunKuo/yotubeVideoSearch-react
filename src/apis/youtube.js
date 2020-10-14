import axios from 'axios';

const KEY = "AIzaSyC7C8Nyl9qSdAq0MiBFIt5m4psXZwuKKdE";


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part:"snippet",
        type:"video",
        maxResults: 5,
        key: KEY
    }
});