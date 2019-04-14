import Vacancy from "../services/Vacancy";
import Area from "../services/Area";
import Currency from "../services/Currency";
import Services from "../services/Services";
import { addListCurrency, addListVacancies, addListArea } from "./";

export function fetch(numberPage) {
  return async dispatch => {
    try {
      const listCurrencyPromise = Services.getCurrency();
      const listAreaPromise = Services.getArea();
      const listVacanciesPromise = Services.getVacancies(50, numberPage);
      const listCurrency = Currency.extract(await listCurrencyPromise);
      const listArea = Area.extract(await listAreaPromise);
      const listVacancies = Vacancy.extract(
        await listVacanciesPromise,
        listCurrency,
        listArea
      );
      const onlyAreaByVacancy = Area.getArea(listVacancies);
      dispatch(addListCurrency(listCurrency));
      dispatch(addListVacancies(listVacancies));
      dispatch(addListArea(onlyAreaByVacancy));
    } catch (error) {
      console.error(error);
    }
  };
}
