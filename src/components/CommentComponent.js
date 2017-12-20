import React, {
	Component
} from 'react';
class CommentItem extends Component {
	render() {
		return (
			<div>
				<p>{this.props.userName} 评论于 {this.timeStampTransfer(this.props.createTime)}</p>
				<p>{this.props.content}</p>
			</div>
		)
	}
	// 时间戳转换
	timeStampTransfer( timeStamp ) {
		if (timeStamp) {
			var teimStamp = new Date(timeStamp * 1000);

			var yearStatus = teimStamp.getFullYear() //年

			var monthStatus = teimStamp.getMonth() + 1 //月

			var dateStatus = teimStamp.getDate() //日

			var hourStatus = teimStamp.getHours() / 10 < 1 ? '0' + teimStamp.getHours() : teimStamp.getHours() //时

			var minStatus = teimStamp.getMinutes() / 10 < 1 ? '0' + teimStamp.getMinutes() : teimStamp.getMinutes(); //分
			// console.log(yearStatus.toString().length);
			// console.log(monthStatus = monthStatus.toString().length > 1 ? monthStatus : '0' + monthStatus);//月
			// console.log(dateStatus = dateStatus.toString().length > 1 ? dateStatus : '0' + dateStatus);//日
			// console.log(hourStatus = hourStatus.toString().length > 1 ? hourStatus : '0' + hourStatus);//时
			// console.log(minStatus = minStatus.toString().length > 1 ? minStatus : '0' + minStatus);//分
			return yearStatus + '-' + monthStatus + '-' + dateStatus + '  ' + hourStatus + ':' + minStatus;
		} else {
			return ''
		}
	}
}

export default CommentItem;