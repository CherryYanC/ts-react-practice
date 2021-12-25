import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'mobx' //
import { Provider } from 'mobx-react'
import Home from '@/pages/index'
import { store } from '@/stores/index'
import Test from './ErrorBoundary'
// import { fibonacci, memoizedFibonacci } from './utils'
// import { fibonacci } from './utils'
import VirtualList from './pages/virtualList'

configure({ enforceActions: 'always' }) // 开启严格模式

class App extends React.Component {
  // componentDidMount() {
  //   console.time('???')
  //   for (let i = 0; i < 100; i++) fibonacci(30) // ~5000ms
  //   console.timeEnd('???')
  //   console.time('???12312')
  //   for (let i = 0; i < 100; i++) memoizedFibonacci(30) // ~50ms
  //   console.timeEnd('???12312')
  // }
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
