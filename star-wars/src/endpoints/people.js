import Api from './api';


class People extends Api {

  async getPerson(id) {
    const response = await this.getInstance().get(`person/${id}`);
    return response.data;
  }
  
}

export default People;