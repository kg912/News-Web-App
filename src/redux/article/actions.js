const actions = {
	ACTIVE_ARTICLE: 'ACTIVE_ARTICLE',

	selectArticle: (item) => ({
		type: actions.ACTIVE_ARTICLE,
		item
	}),

};


export default actions;