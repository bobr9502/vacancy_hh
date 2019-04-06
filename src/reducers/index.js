import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import Vacancy from './Vacancy';
import Area from './Area';
import FilterVacancyCountry from './FilterVacancyCountry';
import SortVacancy from './SortVacancy';
import Currency from './Currency';

export default combineReducers({
	routing: routerReducer,
	vacancy: Vacancy,
	area: Area,
	currency: Currency,
	filterVacancyCountry: FilterVacancyCountry,
	sortVacancy: SortVacancy,
})