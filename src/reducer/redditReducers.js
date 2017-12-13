// reddit的reducer

// reddit的state

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

import {
	combineReducers
} from 'redux';

import {
	SELECT_SUBREDDIT,
	INVALIDATE_SUBREDDIT,
	REQUEST_POSTS,
	RECEIVE_POSTS
} from '../actions/redditAction'

// post的初始值
const initPost = {
	isFetching: false,
	didInvalidate: false,
	items: []
}

function selectedsubreddit(state = 'reactjs', action) {
	switch (action.type) {
		case SELECT_SUBREDDIT:
			return action.subreddit
		default:
			return state;
	}
}

function posts(state = initPost, action) {
	switch (action.type) {
		case INVALIDATE_SUBREDDIT:

			return Object.assign({}, state, {
				didInvalidate: true
			})

		case REQUEST_POSTS:

			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})

		case RECEIVE_POSTS:

			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.posts,
				lastUpdated: action.receivedAt
			})
		default:
			return state;
	}
}

function postsBySubreddit(state = {}, action) {
	switch (action.type) {
		case INVALIDATE_SUBREDDIT:
		case RECEIVE_POSTS:
		case REQUEST_POSTS:
			return Object.assign({}, state, {
				[action.subreddit]: posts(state[action.subreddit], action)
			})
		default:
			return state
	}
}

const rootRedecer = combineReducers({
	posts,
	selectedsubreddit
})

export default rootRedecer;