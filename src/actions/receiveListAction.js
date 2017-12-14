/*评论列表的action*/
import fetchJsonp from 'fetch-Jsonp'

export const RECEIVE_LIST = 'RECEIVE_LIST';

export  function receiveList (data) {
	return {
		type: RECEIVE_LIST,
		data: data.data
	}
}

// 异步action
export function fetchCommentData () {
	//在这里,可以先dispatch一个action

	return function (dispatch) {
		return fetchJsonp('http://comment.house.ifeng.com/api/comment/list?houseId=273851&type=0&pic=0&_=1513219740671')
		.then( (response) => response.json())
		.then( (json) => {
			console.log(json)
			return dispatch(receiveList(json))
		})
	}
}