import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';

//引入addTodo的Action
import {
	addTodo
} from '../actions/action'

let AddTodo = ({
	dispatch
}) => {
	let input

	return (
		<div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
	)
}

// class AddTodo extends Component {
// 	constructor() {
// 		super();
// 		this.input = undefined;
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<form onSubmit={e => {
// 					e.preventDefault()
// 					if (!this.input.value.trim()) {
// 						return
// 					}
// 						this.props.dispatch(addTodo(this.input.value))
// 						this.input.value = '';
// 					}}>
// 					<input ref={node => {
// 						this.input = node
// 					}} />
// 					<button type="submit">
// 						Add Todo
// 					</button>
// 				</form>
// 			</div>
// 		)
// 	}
// }

AddTodo = connect()(AddTodo)

export default connect()(AddTodo)