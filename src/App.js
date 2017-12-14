import React, {
  Component
} from 'react';
import logo from './logo.svg';
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
import CommentTitle from './components/CommentTitle'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

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
        <CommentTitle/>
      </div>
    )
  }
}

export default App;