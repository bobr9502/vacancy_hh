import axios from "axios";
const ENDPOINT = "https://api.hh.ru";

class Api {

  getData(address) {
    const response = axios.get(ENDPOINT + address).catch(error => {
      console.error(error);
    });
    return response;
  }

  //Получить справочник валют
  getVacancies(perPage, numberPage) {
    return this.getData(`/vacancies?&per_page=${perPage}&page=${numberPage}`);
  }

  //Получить справочник валют
  getCurrency() {
    const data = this.getData("/dictionaries");
    return data;
  }

  //Получить справочников регионов, стран..
  getArea() {
    return this.getData("/areas");
  }
}

export default new Api();
