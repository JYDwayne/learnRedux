import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

//导入createStore函数
import {
  createStore
} from 'redux';
//导入reducer
import todoApp from './reducer/reducer';

// 导入action
import {
  addTodo,
  toogleTodo,
  setVisibilityFilter,
  changeTodo
} from './actions/action'

// 导入容器组件
import VisibleTodoList from './containers/VisibleTodoList'

console.log(VisibleTodoList)

let store = createStore(todoApp);

// 打印初始状态
console.log(store.getState())

//注册监听器
store.subscribe(() => console.log(store.getState()))

//发起添加todo的action

store.dispatch(addTodo('该吃药啦!!!'))
store.dispatch(addTodo('zhihaole1'))
store.dispatch(addTodo('又犯了'))
store.dispatch(addTodo('怎么回事'))
store.dispatch(addTodo('纳尼!!!?'))
store.dispatch(addTodo('纳尼!!!?'))

store.dispatch(toogleTodo(1))

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

class App extends Component {
  render() {
    return (
      <div>
        hello world!
      </div>
    )
  }
}

export default App;