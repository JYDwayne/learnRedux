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
//引入reducer,用于创建store
import todoApp from './reducer/reducer';
import redditReducer from './reducer/redditReducers'
//引入评论模块的reducer
import receiveListData from './reducer/commentReducer'

//引入redux-thunk中间件
import thunkMiddleware from 'redux-thunk';

//运用fecthjsp获取后端数据
import fetchJsonp from 'fetch-jsonp'

// 引入异步action
import {
	fetchPosts
} from './actions/redditAction'
// 引入评论的异步action
import {
	fetchCommentData
} from './actions/receiveListAction'

// fetchJsonp('http://comment.house.ifeng.com/api/comment/list?houseId=112489&type=0&pic=0')
// 	.then(function(response) {
// 		return response.json()
// 	}).then(function(json) {
// 		console.log(json)
// 	})
let testStore;
fetchJsonp('http://comment.house.ifeng.com/api/comment/list?houseId=112489&type=0&pic=0')
	.then(function(response) {
		return response.json()
	}).then(function(json) {
		console.log(json)
		console.log({
			totalCount: json.data.total,
			data: json.data.data
		})
		testStore = createStore(
			receiveListData, {
				totalCount: json.data.totalCount,
				data: json.data.data
			},
			applyMiddleware(thunkMiddleware)
		);
		// testStore.dispatch(fetchCommentData())
		// todoList的主结构
		ReactDOM.render(
			<Provider store={testStore}>
				<App />
			</Provider>,
			document.getElementById('root'));
		registerServiceWorker();
	}, function(error) {
		testStore = createStore(receiveListData, applyMiddleware(thunkMiddleware));
		// todoList的主结构
		ReactDOM.render(
			<Provider store={testStore}>
				<App />
			</Provider>,
			document.getElementById('root'));
		registerServiceWorker();
	})


// 创建store,并传入根组件
let store = createStore(todoApp)
// console.log(store.getState())

// 创建另一个测试store



// testStore.dispatch(fetchCommentData())

//注册监听器
store.subscribe(() => console.log(store.getState()))