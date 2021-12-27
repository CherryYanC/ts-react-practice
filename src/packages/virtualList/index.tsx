import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'
import './index.less'

interface props {
  index: number
  style: any
}

const rowRenderer: FC<props> = ({ index, style }) => {
  // const item = this.state.list[index];
  const item = index
  return (
    <li
      key={item}
      style={style}
      onClick={() => {
        console.log('item-', index)
      }}
    >
      item-{index}
    </li>
  )
}

const testObj = {}

const VirtualList: FC = () => {
  const [startIndex, setStartIndex] = useState(0)
  const [total, setTotal] = useState(1200)
  const [height, setHeight] = useState(500)
  const [rowHeight, setRowHeight] = useState(50)
  const [limit, setlimit] = useState(Math.ceil(height / rowHeight))
  const [scrollTop, setScrollTop] = useState(0)
  const [originStartIdx, setOriginStartIdx] = useState(0)
  const [bufferSize] = useState(5)
  const [endIndex, setEndIndex] = useState(
    Math.min(originStartIdx + limit + bufferSize, total - 1)
  )

  const scrollingContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('endIndex', endIndex)
  }, [endIndex])

  const onScroll = (evt: any) => {
    // 判断是不是当前块在滚动
    if (evt.target === scrollingContainer.current) {
      const { scrollTop } = evt.target
      console.log(
        'wakakkak ',
        evt.target.children[1].children[0].getBoundingClientRect().height
      )
      const currentStartIndex = Math.floor(scrollTop / rowHeight)
      // 判断滚动到那个元素了
      if (currentStartIndex !== originStartIdx) {
        setOriginStartIdx(currentStartIndex)
        setStartIndex(Math.max(currentStartIndex - bufferSize, 0))
        setEndIndex(Math.min(currentStartIndex + limit + bufferSize, total - 1))
        setScrollTop(scrollTop)
      }
    }
  }

  const getTransform = () => {
    return `translate3d(0,${
      scrollTop -
      (scrollTop % rowHeight) -
      Math.min(originStartIdx, bufferSize) * rowHeight
    }px,0)`
  }

  const renderDisplayContent = () => {
    const content = []

    for (let i = startIndex; i <= endIndex; i++) {
      content.push(
        rowRenderer({
          index: i,
          style: {
            height: rowHeight + 'px',
            lineHeight: rowHeight + 'px',
            borderBottom: '1px solid #000',
            width: '100%',
            boxSizing: 'border-box',
          },
        })
      )
    }
    return content
  }

  return (
    <div
      style={{
        width: '370px',
        height: '667px',
      }}
    >
      <p>2. 虚拟列表</p>
      <div
        style={{
          height: 500,
          overflowY: 'auto',
          overflowX: 'hidden',
          position: 'relative',
          backgroundColor: '#e8e8e8',
        }}
        onScroll={onScroll}
        ref={scrollingContainer}
      >
        <div
          style={{
            height: total * rowHeight,
            position: 'relative',
            zIndex: -1,
          }}
        ></div>
        <div
          style={{
            width: '100%',
            position: 'absolute',
            top: 0,
            border: '1px solid purple',
            transform: getTransform(),
          }}
        >
          {renderDisplayContent()}
        </div>
      </div>
    </div>
  )
}

export default VirtualList
