import React, { Component } from 'react'

export default class Unmount extends Component {
 componentWillUnmount(){
    console.log('unmounting....');
 }
  render() {
   
    return (
      <div>
        hello
      </div>
    )
  }
}
