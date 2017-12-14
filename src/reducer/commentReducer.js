/*评论列表的reducer*/
// 设计state
// {
//   visibilityFilter: 'SHOW_ALL',
//   commentList: [
//     {
//       userName: '凤凰小编',
//       apartmentName: '联排D1户型',
//       createTime: 1512797006,
//       apartmentUrl: "http://house.ifeng.com/homedetail/273851/roomtype?picId=2672830&picType=109,https://ihouse.ifeng.com/homedetail/273851/waphuxingpic?sort=109&type_alias=联排D1户型",
//       photo: "http://s0.ifengimg.com/2017/09/06/female_aee20ce1.png",
//       isNice: 1,
//       content: "今天天气好，去看了看项目，在莲石路开车真是相当便捷，听介绍项目都是限高的，最高也就6层，现在密度这么低的项目也是不多见了，而且周边环境也是好的没法说，非常适合生活居住，感觉配套目前还比较欠缺，但是这个项目自身规划有商业和学校用地，相信之后会发展的会特别繁华、生活方面也会特别方便，总体来说还是相当满意的"
//     },
//     {
//       userName: '凤凰小编',
//       apartmentName: '联排D1户型',
//       createTime: 1512797006,
//       apartmentUrl: "http://house.ifeng.com/homedetail/273851/roomtype?picId=2672830&picType=109,https://ihouse.ifeng.com/homedetail/273851/waphuxingpic?sort=109&type_alias=联排D1户型",
//       photo: "http://s0.ifengimg.com/2017/09/06/female_aee20ce1.png",
//       isNice: 1,
//       content: "今天天气好，去看了看项目，在莲石路开车真是相当便捷，听介绍项目都是限高的，最高也就6层，现在密度这么低的项目也是不多见了，而且周边环境也是好的没法说，非常适合生活居住，感觉配套目前还比较欠缺，但是这个项目自身规划有商业和学校用地，相信之后会发展的会特别繁华、生活方面也会特别方便，总体来说还是相当满意的"
//     }
//   ]
// }

import {
	RECEIVE_LIST,
	receiveList
} from '../actions/receiveListAction';

//引入fetch-jsonp
import fetchJsonp from 'fetch-jsonp';

// 初始化数据
const initState = {
	totalCount: 0,
	data: []
}

//编写主reducer
function receiveListData( state = initState, action ) {
	switch(action.type) {
		case RECEIVE_LIST:
			
			return Object.assign({}, state, {
				totalCount: action.data.totalCount,
				data: state.data.concat(action.data.data)
			})
		default :
			
			return state
			
	}
}

//编写异步action
function fetchData () {
	//在这里,可以先dispatch一个action

	return function (dispatch) {
		return fetchJsonp('http://comment.house.ifeng.com/api/comment/list?houseId=273851&type=0&pic=0&_=1513219740671')
		.then( (response) => response.json())
		.then( (json) => {
			console.log(json);
			return dispatch(receiveList(json))
		})
	}
}
