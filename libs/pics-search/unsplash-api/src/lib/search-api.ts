import axios from 'axios';
import { MockImagesData } from './mock';

const ACCESS_KEY = 'iHSy62jpNHwULXH0la7EkmvifQ1jX4reW2FWIMvBLrw';

const searchImages  = async (term: string, isMock = false) => {
  if(!isMock){
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
      params: {
        query: term,
      }
    });
    return response.data.results;
  }
  return Promise.resolve(MockImagesData);
}

export {
  searchImages,
};
