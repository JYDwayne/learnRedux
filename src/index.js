import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//引入createStore方法
import {
	createStore,
	applyMiddleware
} from 'redux';
//引入provider组件
import {
	Provider
} from 'react-redux';


//引入评论模块的reducer
import receiveListData from './reducer/commentReducer'

//引入redux-thunk中间件
import thunkMiddleware from 'redux-thunk';

let testStore = createStore(receiveListData, applyMiddleware(thunkMiddleware));

ReactDOM.render(
	<Provider store={testStore}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();