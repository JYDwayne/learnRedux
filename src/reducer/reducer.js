import {
	VisibilityFilters
} from '../actions/action'

//引入action类型
import {
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER
} from '../actions/action'

//引入redux
import {
	combineReducers
} from 'redux';


const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
};

// {
// 	visibilityFilter: 'SHOW_ALL',
// 	todos: [{
// 		text: 'Consider Using Redux',
// 		completed: false
// 	}, {
// 		text: 'Keep all state in a single tree',
// 		completed: false
// 	}]
// }


// function todoApp(state = initialState, action) {
// 	switch (action.type) {
// 		case SET_VISIBILITY_FILTER:
// 			return Object.assign({}, state, {
// 				visibilityFilter: action.filter
// 			})

// 		case ADD_TODO:
// 			return Object.assign({}, state, {
// 				todos: [
// 					...state.todos, {
// 						text: action.text,
// 						completed: false
// 					}
// 				]
// 			})

// 		case TOGGLE_TODO:
// 			return Object.assign({}, state, {
// 				todos: state.todos.map((item, index) => {
// 					if (index == action.index) {
// 						return Object.assign({}, item, {
// 							completed: !item.complete
// 						})
// 					}
// 					return item
// 				})
// 			})

// 		default:
// 			return state;
// 	}
// }


//拆分reducer

function todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state, {
					text: action.text,
					completed: false
				}
			]
		case TOGGLE_TODO:
			return state.map((item, index) => {
				if (index === action.index) {
					return Object.assign({}, item, {
						completed: !item.completed
					})
				}
				return item
			})

		case 'CHANGE_TODONAME':
			return state.map((item, index) => {
				if (index == action.index) {
					return Object.assign({}, item, {
						text: action.newName,
						completed: !item.completed
					})
				}
				return item
			})

		default:
			return state;
	}
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state;
	}
}

// mainReducer主reducer
// function todoApp(state = {}, action) {
// 	return {
// 		visibilityFilter: visibilityFilter(state.visibilityFilter, action),
// 		todos: todos(state.todos, action)
// 	}
// }


//运用combineReducer生成reducer

const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp