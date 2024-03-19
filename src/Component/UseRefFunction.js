import React,{useRef} from 'react'

const UseRefFunction = () => {
    const myRef = useRef(null) ;
    const handleClick=()=>{
        myRef.current.style.backgroundColor = 'yellow'
    }

  return (
    <div ref={myRef}>
      <input type='text' placeholder='this is functional component' />
      <button onClick={handleClick}> Click here </button>
    </div>
  )
}

export default UseRefFunction
