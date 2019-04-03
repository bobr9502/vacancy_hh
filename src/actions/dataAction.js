import Vacancy from '../services/vacancy';
import Area from '../services/area';
import Currency from '../services/currency';


export function fetch(numberPage) {
  return async(dispatch) => {
    try {
    	const listCurrency = await Currency.get();
      const listArea = await Area.getApi(); 
			const listVacancy = await Vacancy.get(numberPage, listCurrency, listArea);
			const onlyAreaByVacancy = await Area.getArea(listVacancy);
			dispatch({type: 'ADD_LIST_CURRENCY', items: listCurrency});
      dispatch({ type: 'ADD_LIST_VACANCY', items: listVacancy });
      dispatch({ type: 'ADD_LIST_AREA', items: onlyAreaByVacancy });
    } catch (error) {
      console.error(error);
    }
  };
}