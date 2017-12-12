import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//引入createStore方法
import {
	createStore
} from 'redux';
//引入provider组件
import {
	Provider
} from 'react-redux';
//引入reducer,用于创建store
import todoApp from './reducer/reducer'

// 创建store,并传入根组件
let store = createStore(todoApp)

//注册监听器
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();