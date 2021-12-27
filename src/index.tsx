import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'mobx' //
import { Provider } from 'mobx-react'
import Home from '@/pages/index'
import { store } from '@/stores/index'
import Test from './ErrorBoundary'
// import { fibonacci, memoizedFibonacci } from './utils'
// import { fibonacci } from './utils'
import VirtualList from '@/packages/virtualList'

configure({ enforceActions: 'always' }) // 开启严格模式

class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <Home />
        <VirtualList />
      </Provider>
    )
  }
}

ReactDOM.render(
  <Test>
    <App />
  </Test>,
  document.querySelector('#app')
)
