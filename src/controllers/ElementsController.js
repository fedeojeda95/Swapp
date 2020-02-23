import { API_URL } from 'react-native-dotenv';
import httpClient from './HttpClient';

class ElementsController {
  constructor() {
    this.basePath = API_URL;
  }

  fetchElements = async (type, page) => {
    const response = await httpClient.get(`${this.basePath}${type}?page=${page}`);
    return response.data;
  }
}

export default new ElementsController();
