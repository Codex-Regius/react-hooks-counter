import React, {useState} from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)
  return(
    <div>
      <p>Le compteur est  à : </p>
      <input type='text' value={count}/> <br/>
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