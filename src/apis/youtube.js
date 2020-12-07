import axios from 'axios';

const KEY = 'AIzaSyDBoKAB2aq4lOts4iLwQHYGHQMx1BcUNws';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
