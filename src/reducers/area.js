const initialState = [];

export default function area(state=initialState, action){
  if (action.type === 'ADD_LIST_AREA') {
    return [
      ...state,
      ...action.items
    ];
  }
  return state;
}

export function getArea(state)
{
	return state.area;
}