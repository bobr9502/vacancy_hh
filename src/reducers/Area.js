import { typeActions } from "../constans/typeActions";

const initialState = [];

export default function area(state = initialState, action) {
  if (action.type === typeActions.ADD_LIST_AREA) {
    return [...state, ...action.payload];
  }
  return state;
}

export function getArea(state) {
  return state.area;
}
