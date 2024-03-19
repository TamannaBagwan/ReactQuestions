import React from 'react'
import Child from './Child'

const Parent = () => {
    const data = 'Hello from parent'
  return (
    <div>
        <h1>Parent component</h1>
    <Child data={data} />
    </div>
  )
}

export default Parent
