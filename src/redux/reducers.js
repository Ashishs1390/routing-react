import * as types from './types';
const initalState = {
	currentTime: new Date().toString()
}

const rootReducer = (state = initialState,action) => {
	switch(action.type) {
		case types.FETCH_NEW_TIME:
			return { ...state, currentTime: action.payload}
		default:
			return state;
	}
}

export default rootReducer;