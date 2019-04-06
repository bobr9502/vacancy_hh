const initialState = '';

export default function filterVacancyCountry(state=initialState, action){
  if (action.type === 'VACANCY_FILTER_COUNTRY') {
    return action.payload;
  }
  return state;
}

export function getFilter(state)
{
	return state.filterVacancyCountry;
}