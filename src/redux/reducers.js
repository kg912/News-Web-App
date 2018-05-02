import { combineReducers } from 'redux';
import NewsReducer from './data/reducer';
import ArticleReducer from './article/reducer'

const rootReducer = combineReducers({
    news: NewsReducer,
    activeArticle: ArticleReducer
});

export default rootReducer;
