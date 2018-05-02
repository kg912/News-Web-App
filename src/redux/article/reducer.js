import actions from './actions';


export default function(state = {}, action) {
	switch(action.type) {
		case actions.ACTIVE_ARTICLE:
			const { item } = action;
			return item;
	}
	return state;
}