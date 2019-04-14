import Vacancy from "../services/Vacancy";
import Area from "../services/Area";
import Currency from "../services/Currency";
import Services from "../services/Services";
import { typeActions } from "./TypeActions";

const addListCurrency = listCurrency => {
  return {
    type: typeActions.ADD_LIST_CURRENCY,
    payload: listCurrency
  };
};

const addListVacancies = listVacancies => {
  return {
    type: typeActions.ADD_LIST_VACANCY,
    payload: listVacancies
  };
};

const addListArea = listArea => {
  return {
    type: typeActions.ADD_LIST_AREA,
    payload: listArea
  };
};

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
