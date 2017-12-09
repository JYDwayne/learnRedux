import {
	connect
} from 'react-redux';

// 引入展示组件
import Link from '../components/Link';

//引入action
import {
	setVisibilityFilter
} from '../actions/action'

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.setVisibilityFilter
	}
}


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;