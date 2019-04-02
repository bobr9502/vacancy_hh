const initialState = 'Название';

export default function sortVacancy(state=initialState, action){
	if (action.type === 'VACANCY_SORT') {
		return action.payload;
	}
	return state;
}

export function getSort(state)
{
	return state.sortVacancy;
}