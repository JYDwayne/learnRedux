/*
action类型
*/

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

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
		filiter
	}
}


/*
 *state形式
 */

{
	visibilityFilter: 'SHOW_ALL',
	todos: [{
		text: 'Consider Using Redux',
		completed: true
	}, {
		text: 'Keep all state in a single tree'
	}]
}