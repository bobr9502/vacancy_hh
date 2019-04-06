import Vacancy from "../services/Vacancy";
import Area from "../services/Area";
import Currency from "../services/Currency";
import { typeActions } from "./TypeActions";

export function fetch(numberPage) {
  return async dispatch => {
    try {
      const listCurrency = await Currency.get();
      const listArea = await Area.getApi();
      const listVacancy = await Vacancy.get(numberPage, listCurrency, listArea);
      const onlyAreaByVacancy = await Area.getArea(listVacancy);
      dispatch({ type: typeActions.ADD_LIST_CURRENCY, items: listCurrency });
      dispatch({ type: typeActions.ADD_LIST_VACANCY, items: listVacancy });
      dispatch({ type: typeActions.ADD_LIST_AREA, items: onlyAreaByVacancy });
    } catch (error) {
      console.error(error);
    }
  };
}
