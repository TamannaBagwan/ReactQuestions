import React from 'react'
import SubChild from './SubChild'

const Child = (props) => {
  return (
    <div>
        <h2> Child component </h2>
         <SubChild data={props.data} />
    </div>
  )
}

export default Child
