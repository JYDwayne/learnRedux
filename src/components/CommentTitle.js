/*这是一个展示组件,用于显示评论信息,时间,等等*/
import React, {
	Component
} from 'react';

class CommentTitle extends Component {
	constructor(argu) {
		super(argu)
		this.state = {
			name: 'dwayne',
			count: 10,
			clickAble: true
		}
		this.countChnage = this.countChnage.bind(this)
	}
	render() {
		return (
			<div>
				<div>年龄{this.state.age}</div>
				<div>时间{this.state.count}</div>
				<button onClick={this.countChnage}>{this.state.clickAble? "发送验证码":this.state.count + 'S'}</button>
			</div>
		)
	}
	countChnage() {
		if (!this.state.clickAble) {
			return
		}
		// this.setState(prevState => {
		// 	return {
		// 		name: prevState.name.toUpperCase(),
		// 		age: 35
		// 	}
		// })
		this.setState({
			clickAble: false
		})
		let timeId = setInterval(() => {
			if (this.state.count <= 0) {
				clearInterval(timeId)
				this.setState({
					count: 10,
					clickAble: true
				})
				return
			}

			this.setState(prevState => ({
				count: prevState.count - 1
			}))
		}, 1000)
	}
}

export default CommentTitle