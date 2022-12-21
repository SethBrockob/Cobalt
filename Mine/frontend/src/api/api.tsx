import axios from "axios";


class API {
  static url = "http://127.0.0.1:8000/";
}

export class MineralAPI extends API {
  static async post_Mineral(data:any) {
    return await axios
      .post(`${this.url}api/`, data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.response.data);
      });
  }

  static async getMineral() {
    return await axios
      .get(`${this.url}api/`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.response.data);
      });
  }

  static async updateMineral(data:any) {
    return await axios
      .put(`${this.url}api/`, data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.response.data);
      });
  }
}