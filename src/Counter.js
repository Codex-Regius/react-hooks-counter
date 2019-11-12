import React, {useState} from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)
  return(
    <div>
      <p>Le compteur est  à : {count} </p>
      <input type='number' value={count} onChange={event => setCount(parseInt(event.target.value, 10))}/> <br/>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  )
}

export default Counter