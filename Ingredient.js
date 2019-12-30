import './App.css'
import React, { Component } from 'react'
export default class Ingredient extends Component {
  // constructor(props) {
  //   super(props)  
  // };
  
  add=(array,tyes)=>{
    let a = []
    for (let p = 0; p < array; p++) {
      a.push(tyes)      
    }
    return a
  }
  rand=()=>{
   let a = this.add(this.props.times,this.props.type)
   return a.map((item,index)=>{
     return <div key={index} className={item}>a</div>
   })
  }
  render() {
    return (  
      <div>
        {this.rand()}
      </div>
    )
  }
}
