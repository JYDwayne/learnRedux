/*
初始化一个评论列表的component
*/
import React, {
	Component
} from 'react';
import CommentComponent from "./CommentComponent";

class CommentList extends Component {
	render() {
		console.log(this.props.data)
		return (
			<div>
				{this.props.data.map((item, index) => {
					return <CommentComponent key={index} {...item} />
				})}
			</div>
		)
	}
}

export default CommentList;