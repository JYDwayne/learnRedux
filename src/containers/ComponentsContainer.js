// 引入react-redux库
import {
	connect
} from 'react-redux';
//引入需要包装的展示组件
import CommentList from '../components/CommentList'
//引入action
import {
	fetchNextPage,
	fetchPrevPage
} from '../actions/receiveListAction'

// 定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中
function mapStateToProps(state) {
	console.log(state)
	return {
		data: state.data,
		totalCount: state.totalCount,
		totalPage: state.totalPage,
		index: state.index
	}
}

//定义 mapDispatchToProps,容器组件分发action
function mapDispatchToProps(dispatch) {
	return {
		getNextPage: function(currentPage) {
			console.log('走下一页!!!', '当前页' + currentPage);
			dispatch(fetchNextPage(currentPage))
		},
		getPrevPage: function(currentPage) {
			console.log('走上一页!!!', '当前页' + currentPage);
			dispatch(fetchPrevPage(currentPage))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)