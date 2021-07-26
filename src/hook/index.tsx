import React, { useState, useEffect } from 'react'

const Index = () => {
    const [ num ,setNumber ] = useState(0)
    useEffect(() => {
        console.log('num', num)
    }, [num])
    const handerClick=()=>{
        for(let i=0; i<5;i++ ){
           setTimeout(() => {
                setNumber(num+1)
           }, 1000)
        }
    }
    return (
        <div>
            <p>3. hooks:</p>
            <button onClick={ handerClick } >{ num }</button>
        </div>
    )
}

export default Index