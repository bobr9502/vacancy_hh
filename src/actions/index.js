import { typeActions } from "./typeActions";

export const addListCurrency = listCurrency => {
  return {
    type: typeActions.ADD_LIST_CURRENCY,
    payload: listCurrency
  };
};

export const addListVacancies = listVacancies => {
  return {
    type: typeActions.ADD_LIST_VACANCY,
    payload: listVacancies
  };
};

export const addListArea = listArea => {
  return {
    type: typeActions.ADD_LIST_AREA,
    payload: listArea
  };
};
