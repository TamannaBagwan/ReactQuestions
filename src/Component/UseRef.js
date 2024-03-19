import React, { Component } from 'react'

export default class UseRef extends Component {
    constructor(){
        super() ;
        this.inputRef = React.createRef()
    }
    componentDidMount(){
        console.log( this.inputRef.current);
    }

  render() {
    const handleClick=()=>{
        this.inputRef.current.focus();
        this.inputRef.current.style.color = 'blue' ;
        this.inputRef.current.style.height = '50px'
    }

    return (
      <div>
        <input type='text' placeholder='write here..' ref={ this.inputRef}  />
        <button onClick={handleClick}> Click here to focus input </button>
      </div>
    )
  }
}
