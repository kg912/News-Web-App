import actions from './actions';


export default function(state = {}, action) {
	switch(action.type) {
		case actions.FETCH_DATA_SUCCESS:
			return action.articles;

	}
	return state;
}