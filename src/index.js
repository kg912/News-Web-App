import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';


const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
	reducers,
	applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider> ,document.getElementById('root'));
registerServiceWorker();


