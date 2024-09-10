import React, { useEffect, useState } from 'react'

const Example = () => {
    let [count1, setCount1] = useState(0)
    //режимы работы useEffect

    //Инициализация (useeffect для этого этапа не нужен)
    // console.log('%c Initions components', 'color: green');

    //Монтирование
    useEffect(() => {
        console.log('%c Component montation', 'color: blue');
        
    },[])

    //Монтирование + обновление
    useEffect(() => {
        console.log('%c Component montation', 'color: orange');
        
    })
    
  return (
    <div>Example
        <p>{count1}</p>
        <button onClick={() => setCount1(count1 + 1)}>Click</button>
    </div>
  )
}

export default Example