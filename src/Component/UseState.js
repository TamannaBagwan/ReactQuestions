import React, {useState} from 'react' 

const UseState = () => {
    const [name , setName] = useState('') ;
    const [count ,setCount] = useState(0)
  return (
    <div>
      <input type='text' placeholder='type here' onChange={(e)=>setName(e.target.value)} />
      <h1> {name}  </h1>

      <h2> {count} </h2>
      <button onClick={()=>setCount(count + 1)}> Increment </button>
      <button onClick={()=>setCount(count - 1)}> Decrement </button>
    </div>
  )
}

export default UseState
