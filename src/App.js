import React, {
  Component
} from 'react';

import './App.css';

// 引入评论的容器组件
import ComponentsContainer from './containers/ComponentsContainer';
import Reversebtn from "./components/CommentTitle";

class App extends Component {
  render() {
    return (
      <div>
        <ComponentsContainer/>
        <Reversebtn/>
      </div>
    )
  }
}

export default App;