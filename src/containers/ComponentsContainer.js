// 引入react-redux库
import { connect } from 'react-redux';
//引入需要包装的展示组件
import CommentList from '../components/CommentList'

// 定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中
function mapStateToProps(state) {
	console.log(state)
	return {
		data: state.data
	}
}

export default connect(mapStateToProps)(CommentList)