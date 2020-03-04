import {API_URL} from 'react-native-dotenv';
import httpClient from './HttpClient';

class ElementsController {
  constructor() {
    this.basePath = API_URL;
  }

  fetchElements = async (type, searchText, page) => {
    let fetchPath = `${this.basePath}${type}?page=${page}`;
    if (searchText) {
      fetchPath = `${fetchPath}&search=${searchText}`;
    }

    const response = await httpClient.get(fetchPath);
    return response.data;
  };
}

export default new ElementsController();
