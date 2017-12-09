/*
action类型
*/

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const CHANGE_TODONAME = 'CHANGE_TODONAME';


/*
 *其他常亮
 */

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
action创建函数
*/

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}

export function toogleTodo(index) {
	return {
		type: TOGGLE_TODO,
		index
	}
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}


// 修改某个todo的名字
export function changeTodo(index, newName) {
	return {
		type: CHANGE_TODONAME,
		index,
		newName
	}
}

/*
 *state形式
 */

// {
// 	visibilityFilter: 'SHOW_ALL',
// 	todos: [{
// 		text: 'Consider Using Redux',
// 		completed: true
// 	}, {
// 		text: 'Keep all state in a single tree'
// 	}]
// }