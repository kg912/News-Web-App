import { all } from 'redux-saga/effects';
import newsDataSagas from './data/saga';



export default function* rootSaga(getState) {
	yield all([
		newsDataSagas()
	]);
}
