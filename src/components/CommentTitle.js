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
			clickAble: true,
			phoneNum: '',
			password: ''
		}
		this.countChnage = this.countChnage.bind(this);
		this.changePhoneNum = this.changePhoneNum.bind(this);
	}
	render() {
		return (
			<div>
				<div>年龄{this.state.age}</div>
				<div>时间{this.state.count}</div>
				<div>登录部分</div>
				<input type="text" name="fname" placeholder="请输入手机号码" value={this.state.phoneNum} onChange={this.changePhoneNum}/><br/>
				{/*<button onClick={this.countChnage}>{this.state.clickAble? "发送验证码":this.state.count + 'S'}</button><br/>*/}
				<input type="password" name="fname" placeholder="请输入密码" value={this.state.password}/>
				<div>手机号:{this.state.phoneNum},密码:{this.state.password}</div>

				<button>登录</button>
			</div>
		)
	}
	countChnage() {
		if (!this.state.clickAble) {
			return
		}
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
	changePhoneNum(event) {
		this.setState({
			phoneNum: event.target.value
		})
	}
}

export default CommentTitle