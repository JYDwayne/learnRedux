import React, {
	Component
} from 'react';
class CommentItem extends Component {
	render() {
		return (
			<div>
				<p>{this.props.userName} 评论于 {this.props.createTime}</p>
				<p>{this.props.content}</p>
			</div>
		)
	}
}

export default CommentItem;