/*评论列表的action*/
import fetchJsonp from 'fetch-Jsonp'

export const RECEIVE_LIST = 'RECEIVE_LIST';

export const GET_NEXT_PAGE = 'GET_NEXT_PAGE';

export const GET_PREV_PAGE = 'GET_PREV_PAGE';

export const CHANGE_LIST = 'CHANGE_LIST';

export function receiveList(data) {
	return {
		type: RECEIVE_LIST,
		data: data.data
	}
}

export function changePage(data) {
	return {
		type: CHANGE_LIST,
		data: data.data
	}
}

// 异步action
// export function fetchCommentData() {
// 	//在这里,可以先dispatch一个action
// 	return function(dispatch) {
// 		return fetchJsonp('http://comment.house.ifeng.com/api/comment/list', {
// 				method: 'GET',
// 				houseId: 273851,
// 				// houseId: 111019,
// 				type: 0,
// 				pic: 0
// 			})
// 			.then((response) => response.json())
// 			.then((json) => {
// 				return dispatch(receiveList(json))
// 			})
// 	}
// }

//获取下一页异步action
export function fetchNextPage(currentPage) {
	return function(dispatch, getState) {
		if (getState().totalPage < currentPage + 1) {
			alert('无效操作');
			return;
		} else {
			return fetchJsonp('http://comment.house.ifeng.com/api/comment/list?houseId=112489&type=0&pic=0&index=' + (currentPage + 1))
			.then((response) => response.json())
			.then((json) => {
				return dispatch(changePage(json))
			})
		}
	}
}

//获取上一页异步action
export function fetchPrevPage(currentPage) {
	return function(dispatch, getState) {
		if (getState().totalPage > currentPage - 1) {
			alert('无效操作');
			return;
		} else {
			return fetchJsonp('http://comment.house.ifeng.com/api/comment/list?houseId=112489&type=0&pic=0&index=' + (currentPage - 1))
			.then((response) => response.json())
			.then((json) => {
				return dispatch(changePage(json))
			})
		}
	}
}


