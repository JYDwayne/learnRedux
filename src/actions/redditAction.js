// 引入fetchJsonp
import fetchJsonp from 'fetch-jsonp'

// 帖子头条的action
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
//点击选择
export function selectSubreddit(subreddit) {
	return {
		type: SELECT_SUBREDDIT,
		subreddit
	}
}

//点击刷新按钮更新
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

export function invalidatesubreddit(subreddit) {
	return {
		type: INVALIDATE_SUBREDDIT,
		subreddit
	}
}

//网络请求帖子
export const REQUEST_POSTS = 'REQUEST_POSTS';

export function requestPosts(subreddit) {
	return {
		type: REQUEST_POSTS,
		subreddit
	}
}

//收到网络请求,发起的action
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function receivePosts(subreddit, json) {
	return {
		type: RECEIVE_POSTS,
		subreddit,
		posts: json.data.data.map(child => child.content),
		receivedAt: Date.now()
	}
}

//thunk action
export function fetchPosts(subreddit) {
	return function(dispatch) {
		dispatch(requestPosts(subreddit))
		return fetchJsonp('http://comment.house.ifeng.com/api/comment/list?houseId=112489&type=0&pic=0')
			.then(response => {
				return response.json()
			})
			.then(json => {
				console.log(json)
				return dispatch(receivePosts(subreddit, json))
			})
	}
}
//Reddit应用的state

// {
//   selectedsubreddit: 'frontend',
//   entities: {
//     users: {
//       2: {
//         id: 2,
//         name: 'Andrew'
//       }
//     },
//     posts: {
//       42: {
//         id: 42,
//         title: 'Confusion about Flux and Relay',
//         author: 2
//       },
//       100: {
//         id: 100,
//         title: 'Creating a Simple Application Using React JS and Flux Architecture',
//         author: 2
//       }
//     }
//   },
//   postsBySubreddit: {
//     frontend: {
//       isFetching: true,
//       didInvalidate: false,
//       items: []
//     },
//     reactjs: {
//       isFetching: false,
//       didInvalidate: false,
//       lastUpdated: 1439478405547,
//       items: [ 42, 100 ]
//     }
//   }
// }