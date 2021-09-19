import Api from './api';


class People extends Api {

  async getPeople(query) {
    const response = await this.getInstance().get(`people/?page=${query}`);
    return response.data;
  }

  async getPerson(id) {
    const response = await this.getInstance().get(`person/${id}`);
    return response.data;
  }
  
}

export default People;