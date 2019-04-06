const ENDPOINT = "https://api.hh.ru";

class Api {

  async getData(address) {
    const url = ENDPOINT + address;
    const response = await fetch(url);
    if (!response.ok) {
      alert(`Ошибка доступа, HTTP status ${response.status}`);
      return null;
    }
    return response.json();
  }

  //Получить справочник валют
  async getVacancies(perPage, numberPage) {
    return await this.getData(
      `/vacancies?&per_page=${perPage}&page=${numberPage}`
    );
  }

  //Получить справочник валют
  async getCurrency() {
    return await this.getData("/dictionaries");
  }

  //Получить справочников регионов, стран...
  async getArea() {
    return await this.getData("/areas");
  }
}

export default new Api();
