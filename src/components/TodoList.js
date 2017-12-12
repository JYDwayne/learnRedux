import React, {
	Component
} from 'react';

import Todo from './Todo'

class TodoList extends Component {
	render() {
		console.log(this.props.todos)
		return (
			<ul>
				{this.props.todos.map((item, index) => {
					return <Todo
						key={index}
						{...item}
						onClick={ () => this.props.onTodoClick(index) }
					/>
				})}
			</ul>
		)
	}
}
export default TodoList