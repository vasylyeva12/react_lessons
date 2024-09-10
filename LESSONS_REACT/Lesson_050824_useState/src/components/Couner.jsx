import React, { useState } from 'react'

const Couner = () => {
    let [count, setCount] = useState(0)

    const decrement = () => {
        setCount(--count)
    }

    const increment = () => {
        setCount(++count)
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>

        </div>
  )
}

export default Couner