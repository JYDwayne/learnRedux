import React, {
	Component
} from 'react';

import Todo from './Todo'

class TodoList extends Component {
	render() {
		return (
			<ul>
				{this.props.todos.map((item) => 
					<Todo key={item.id}
					{...item}
					onClick={() => this.props.onTodoClick(item.id)}
				/>)}
			</ul>
		)
	}
}

export default TodoList