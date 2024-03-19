import React from 'react' ;
import Child1 from './Child1';
export const myContext = React.createContext()
const Parent1 = () => {
    const text = 'good evening' ;

  return (
    <div>
        <myContext.Provider value={text}>
        <Child1 />
        </myContext.Provider>
     
    </div>
  )
}

export default Parent1
