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

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

// class ClassWithObj extends Component {
//   render() {
//     return (<p>{this.props.children}</p>)
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ClassWithObj> <a href='http://www.baidu.com'>跳转!!!</a> </ClassWithObj>
//         hello world!
//       </div>
//     )
//   }
// }

export default App;