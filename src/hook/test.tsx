import React, { useEffect, useState, useRef, useMemo } from 'react'

function TextHook () {
  const [number, setNumber] = useState(0)
  const DivDemo = useMemo(() => <div>hello, i am useMemo</div>, [])
  const curRef = useRef(null)

  useEffect(() => {
    console.log(curRef.current)
  }, [])

  return (
    <div ref={curRef}>
      hello world { number }
      { DivDemo }
      <button onClick={ () => setNumber(number + 1) }>number++</button>
    </div>
  )
}
