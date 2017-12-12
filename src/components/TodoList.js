import React, {
	Component
} from 'react';

import Todo from './Todo'

class TodoList extends Component {
	render() {
		return (
			<ul>
				{this.props.todos.map((item, index) => {
					return <Todo
						key={index}
						text={item.text}
						onClick={ () => this.props.onTodoClick(index) }
					/>
				})}
			</ul>
		)
	}
}
export default TodoList