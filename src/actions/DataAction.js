import Vacancy from "../services/Vacancy";
import Area from "../services/Area";
import Currency from "../services/Currency";
import Services from "../services/Services";

import { typeActions } from "./TypeActions";

export function fetch(numberPage) {
  return async dispatch => {
    try {
      const listCurrencyPromise = Services.getCurrency();
      const listAreaPromise = Services.getArea();
      const listCurrency = Currency.extract(await listCurrencyPromise);
      const listArea = Area.extract(await listAreaPromise);

      const listVacancy = Vacancy.extract(
        await Services.getVacancies(50, numberPage),
        listCurrency,
        listArea
      );
      const onlyAreaByVacancy = Area.getArea(listVacancy);
      dispatch({ type: typeActions.ADD_LIST_CURRENCY, items: listCurrency });
      dispatch({ type: typeActions.ADD_LIST_VACANCY, items: listVacancy });
      dispatch({ type: typeActions.ADD_LIST_AREA, items: onlyAreaByVacancy });
    } catch (error) {
      console.error(error);
    }
  };
}
