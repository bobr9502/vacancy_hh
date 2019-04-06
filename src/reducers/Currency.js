import { typeActions } from "../actions/TypeActions";
import _ from "lodash";

const initialState = [];

export default function currency(state = initialState, action) {
  if (action.type === typeActions.ADD_LIST_CURRENCY) {
    return [...state, ...action.items];
  }
  return state;
}

export function getCurrency(state) {
  return state.currency;
}

export function getAbbr(itemCurrency, listCurrency) {
  const currency = _.get(itemCurrency, "salary.currency");
  if (currency) {
    const abbrItemCurrency = listCurrency.find(function(item) {
      return item.code === currency;
    });
    return abbrItemCurrency.abbr;
  }
  return "";
}
