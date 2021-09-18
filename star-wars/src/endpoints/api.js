import axios from 'axios';
class Api {

  getInstance() {
    const defaultOptions = {
      baseURL: "http://localhost:8000/",
    };

    const instance = axios.create(defaultOptions);
    return instance;
    
  }
}

export default Api;