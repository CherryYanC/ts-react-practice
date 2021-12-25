import React from 'react'
import { inject, observer } from 'mobx-react'
import { MastStore } from '../../stores/mastStore'

interface Props {
  mast?: MastStore
}

@inject('mast')
@observer
class Home extends React.Component<Props> {
  addList = () => {
    const { mast } = this.props
    mast?.addlist({ message: 'list 1', id: 1 })
  }

  componentDidMount() {
    // throw new Error('hello my Error')
  }

  render() {
    const { mast } = this.props
    console.log(mast?.getList)
    return (
      <div>
        <p>1. mobx 使用测试</p>
        <div>
          <button onClick={this.addList}>click me to add list</button>
        </div>
        <div>
          {mast?.list.map((item: any, index: number) => (
            <div key={index}>{item.message}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default Home
