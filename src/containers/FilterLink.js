/*
 *创建FilterLink部分
 */
//引入react-redux库
import {
	connect
} from 'react-redux';

// 引入action
import {
	setVisibilityFilter
} from '../actions/action'

import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
	return {
		active: state.visibilityFilter === ownProps.filter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink;