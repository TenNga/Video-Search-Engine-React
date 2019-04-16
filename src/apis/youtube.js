import axios from 'axios';

const KEY = "AIzaSyB8TrQfFwWq7KhqvIbJbv1OmIsMZzfAW7g";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY
    }
});