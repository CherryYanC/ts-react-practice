import React from 'react'
import ReactDOM from 'react-dom'
import Home from './src/home'
import { Provider } from "mobx-react"
import {store} from './src/mobx/index'
import {configure} from 'mobx'; // 
import Test from './src/ErrorBoundary'
import Index from './src/hook/index'
import { fibonacci, memoizedFibonacci } from './src/utils/index'
import VirtualList from './src/pages/virtualList'

configure({enforceActions: "always"}) // 开启严格模式


class App extends React.Component {
    componentDidMount () {
        console.time('???')
        for (let i = 0; i < 100; i++) fibonacci(30); // ~5000ms
        console.timeEnd('???')
        console.time('???12312')
        for (let i = 0; i < 100; i++) memoizedFibonacci(30); // ~50ms
        console.timeEnd('???12312')
    }
    render () {
        return <Provider { ...store } >
            <Home />
            <VirtualList />
            <Index />
        </Provider>
    }
}

ReactDOM.render(
    <Test>
        <App/>
    </Test>, document.querySelector('#app')
)



// import React from "react"
// import ReactDOM from "react-dom"
// import { action, computed, makeAutoObservable, observable } from "mobx"
// import { observer } from "mobx-react"

// // Model the application state.
// class Timer {
//     secondsPassed = 0

//     constructor() {
//         makeAutoObservable(this, {
//             secondsPassed: observable,
//             increase: action,
//             reset: action
//         })
//     }

//     increase() {
//         this.secondsPassed += 1
//     }

//     reset() {
//         this.secondsPassed = 0
//     }
// }

// const myTimer = new Timer()

// // Build a "user interface" that uses the observable state.
// const TimerView = observer(({ timer }: any) => {
//     return <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
// })

// ReactDOM.render(<TimerView timer={myTimer} />, document.querySelector('#app'))

// // Update the 'Seconds passed: X' text every second.
// // setInterval(() => {
// //     myTimer.increase()
// // }, 1000)