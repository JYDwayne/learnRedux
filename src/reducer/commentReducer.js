
//引入combinerReducer方法
import {
	combineReducer
} from 'redux'

import {
	RECEIVE_LIST,
	CHANGE_LIST
} from '../actions/receiveListAction';

//引入fetch-jsonp
import fetchJsonp from 'fetch-jsonp';

// 初始化数据
const initState = {
	totalCount: 0,
	loginState: 0,
	data: []
}

//编写主reducer
function receiveListData(state = initState, action) {
	switch (action.type) {
		case RECEIVE_LIST:
			return {
				...state,
				totalCount: action.data.totalCount,
				data: state.data.concat(action.data.data),
				totalPage: state.totalPage,
				index: state.index
			}
		case CHANGE_LIST:
			return {
				...state,
				totalCount: action.data.totalCount,
				data: action.data.data,
				totalPage: action.data.totalPage,
				index: action.data.index
			}
		default:

			return state

	}
}

export default receiveListData;