import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import vacancy from './vacancy';
import area from './area';
import filterVacancyCountry from './filterVacancyCountry';
import sortVacancy from './sortVacancy';
import currency from './currency';

export default combineReducers({
	routing: routerReducer,
	vacancy,
	area,
	currency,
	filterVacancyCountry,
	sortVacancy,
})