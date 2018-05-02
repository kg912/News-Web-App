const actions = {
	FETCH_DATA: 'FETCH_DATA',
	FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
	FETCH_SEARCH_DATA: 'FETCH_SEARCH_DATA',

	fetchNewsData: (callback) => ({
		type: actions.FETCH_DATA,
		callback
	}),

	search: (keyword, callback) => ({
		type: actions.FETCH_SEARCH_DATA,
		keyword,
		callback
	})

};


export default actions;