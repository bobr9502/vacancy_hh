import axios from "axios";
const ENDPOINT = "https://api.hh.ru";

class Api {
  async getData(address) {
    const response = await axios.get(ENDPOINT + address).catch(error => {
      console.log(error);
    });
    return response.data;
  }

  //Получить справочник валют
  async getVacancies(perPage, numberPage) {
    return this.getData(`/vacancies?&per_page=${perPage}&page=${numberPage}`);
  }

  //Получить справочник валют
  async getCurrency() {
    const data = await this.getData("/dictionaries");
    return data.currency;
  }

  //Получить справочников регионов, стран..
  async getArea() {
    return this.getData("/areas");
  }
}

export default new Api();
