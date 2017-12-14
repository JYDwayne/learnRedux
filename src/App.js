import React, {
  Component
} from 'react';

import './App.css';

// 导入action
import {
  addTodo,
  toogleTodo,
  setVisibilityFilter,
  changeTodo
} from './actions/action'

// 导入容器组件
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodo from './containers/AddTodo'
import Footer from './components/Footer'
// 新加的容器组件,评论部分
import CommentList from './components/CommentList'


// commentTitle组件的导入
import CommentTitle from './components/CommentTitle';
// 引入评论的容器组件
import ComponentsContainer from './containers/ComponentsContainer';

// todoList的结构
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <AddTodo />
//         <VisibleTodoList />
//         <Footer />
//       </div>
//     )
//   }
// }

// class ClassWithObj extends Component {
//   render() {
//     return (<p>{this.props.children}</p>)
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <ComponentsContainer/>
      </div>
    )
  }
}

export default App;