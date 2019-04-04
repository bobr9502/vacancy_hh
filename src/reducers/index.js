import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import Vacancy from './vacancy';
import Area from './area';
import FilterVacancyCountry from './filterVacancyCountry';
import SortVacancy from './sortVacancy';
import Currency from './currency';

export default combineReducers({
	routing: routerReducer,
	vacancy: Vacancy,
	area: Area,
	currency: Currency,
	filterVacancyCountry: FilterVacancyCountry,
	sortVacancy: SortVacancy,
})