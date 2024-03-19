import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const HookUseEffect = () => {
    const [data,setData] = useState([]);
    const [loading , setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((result) => {
            setData(result);
            setLoading(false); 
        })
    },[])
  return (
    <div>
      {
        loading ?( <h3>Loading.... </h3>) : (data.map((item,i)=>(
            <h3 key={i}>{item.name}</h3>
        )))
      }
    </div>
  )
}

export default HookUseEffect
