import { typeActions } from "../constans/typeActions";

const initialState = "Название";

export default function sortVacancy(state = initialState, action) {
  if (action.type === typeActions.VACANCY_SORT) {
    return action.payload;
  }
  return state;
}

export function getSort(state) {
  return state.sortVacancy;
}
