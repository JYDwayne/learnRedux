/*
初始化一个评论列表的component
*/
import React, {
	Component
} from 'react';
import CommentComponent from "./CommentComponent";

class CommentList extends Component {
	componentWillMount() {
		this.props.initDataFromService()
	}
	render() {
		return (
			<div>
				<div>共有评论:{this.props.totalCount} 条</div>
				<div>页码
				<button onClick={ e => {
					this.props.getPrevPage(this.props.index)
				}}
				>上一页</button>
				{this.props.index}/{this.props.totalPage}
				<button onClick={e => {
					this.props.getNextPage(this.props.index)
				}}>下一页</button></div>
				{this.props.data.map((item, index) => {
					return <CommentComponent key={index} {...item} />
				})}
			</div>
		)
	}
}

export default CommentList;