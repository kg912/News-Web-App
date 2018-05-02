import { all, takeEvery, put, fork, take, cancelled, call} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import actions from './actions';
import axios from 'axios';

const { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_SEARCH_DATA} = actions;
const API_KEY = '773f16e7f7594a7782f9c30226816fd7';
const api_url =  `https://newsapi.org/v2/top-headlines?sources=bbc-news,cnn&apiKey=${API_KEY}`;



export function* newsDataRequest() {

	yield takeEvery(FETCH_DATA, function*(action) {
		const { callback } = action;
		console.log("DATA REQUEST SAGA");
		const NewsData = yield call(fetchNews);
		const { data: { articles } } = NewsData;
		yield put({
			type: FETCH_DATA_SUCCESS,
			articles,
			callback
		})
	});

}

export function* newsDataSuccess() {

	yield takeEvery(FETCH_DATA_SUCCESS, function*(action) {
		const { callback } = action;
		callback();
	});


}

export function* newsDataSearch() {

	yield takeEvery(FETCH_SEARCH_DATA, function*(action) {
		const { keyword, callback } = action;

		const NewsData = yield call(searchNews, keyword);
		const { data: { articles } } = NewsData;
		yield put({
			type: FETCH_DATA_SUCCESS,
			articles,
			callback
		})
	});

}

export function fetchNews() {
	return axios.get(api_url);
};

export function searchNews(query) {
	let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
	return axios.get(url);
}



export default function* rootSaga() {
	yield all([
		fork(newsDataRequest),
		fork(newsDataSuccess),
		fork(newsDataSearch)
	]);
}
