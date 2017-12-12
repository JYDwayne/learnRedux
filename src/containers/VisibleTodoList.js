import {
	connect
} from 'react-redux'
//导入需要转换的展示组件
import TodoList from '../components/TodoList'

// 传入action
import {
	toogleTodo,
	setVisibilityFilter
} from '../actions/action'

//创建将state转换成props的函数
const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL':

			return todos
		case 'SHOW_COMPLETED':

			return todos.filter((item) => item.completed)
			break;

		case 'SHOW_ACTIVE':
			return todos.filter((item) => !item.completed)
	}
}

const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toogleTodo(id))
		}
	}
}


const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;