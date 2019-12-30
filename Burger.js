  import React, { Component } from 'react'
  import  './App.css'
  import Ingredient from './Ingredient'
  import Button from './Button'
  import ModalItem from './ModalItem'
  import Modal from './Modal'
  export default class Burger extends Component {
    constructor(props) {
      super(props)
      this.state = {
        ingredient:{
          Bacon:0,
          Meat:0,
          Cheese:0,
          Salad:0,
        },
        ingrePrice:{
          Bacon:1.3,
          Meat:1.6,
          Cheese:2.0,
          Salad:1.0,
        },
        tP:4,
        button:false,
        buttonStyle:{
          border:"10px solid gray",
          color:"white",
          outline:"none",
          backgroundColor:"gray"
        },
        Modal:false
      }
    }
    ingre=()=>{
     return Object.keys(this.state.ingredient).map((item,index)=>{
      return <Ingredient 
        key={index}
        times={this.state.ingredient[item]} 
        type={item}
         />
        })
  }
  CheckState=()=>{
    let can_work = null
    let h  = this.state.ingredient
  let store = Object.keys(h)
   for(let a of store){
     if(h[a]){
      can_work=true
      break;      
     }
   }   
   return can_work
}
 
   Increment=(type)=>{
     if(this.state.buttonStyle.color==="white"){
      this.checkIngredients()
     }
    let newObje = {...this.state.ingredient} 
    newObje[type]++
    let tP = this.state.tP
    let jCole = tP + this.state.ingrePrice[type]
    this.setState(prevState => {
      return { 
        ingredient: newObje,
        tP:jCole
      };
    });
  }
   Decrement=(type)=>{
    let tP = this.state.tP
if(tP - this.state.ingrePrice[type]<4 && this.state.ingrePrice[type] - tP){
  return
}
let newObje = {...this.state.ingredient} 
    newObje[type]--
    let jCole = this.state.ingrePrice[type] - tP
    this.setState(prevState => {
      return { 
        ingredient: newObje,
        tP:jCole
      };
    });
  }
  clear=()=>{
    this.setState(prevState => {
      return { 
        ingredient:{
          Bacon:0,
          Meat:0,
          Cheese:0,
          Salad:0,
        },
      };
    });
  }
  checkIngredients=()=>{
   return Object.keys(this.state.ingredient).map((item)=>{
      if(this.state.ingredient[item]){
        return this.setState(prevState => {
          return { 
            buttonStyle:{
              border:"10px solid yellow",
              color:"blue",
              outline:"none",
              backgroundColor:"yellow"
            },
          };
        });

      }
    })
  }
  changeModalState=()=>{
    this.setState(prevState => {
      return { 
        Modal:false
      };
    });

  }
  doThings=()=>{
      if(this.state.Modal){
        return (
        <Modal changeModalState={this.changeModalState}>
        <ModalItem ingredient={this.state.ingredient} total={this.state.tP}/>
        </Modal>
        )
      }
  }
  showModal=()=>{
    this.setState(prevState => {
      return { 
        Modal:true
      };
    });
  }
    render() {
      return (
        <div>
<div className="BreadTop">a</div>
{this.CheckState() ? this.ingre():"please add ingredient"}
<div className="BreadBottom">a</div>
        <Button thing={"Meat"} increase={this.Increment} decrease={this.Decrement}/>
        <Button thing={"Bacon"} increase={this.Increment} decrease={this.Decrement}/>
        <Button thing={"Cheese"} increase={this.Increment} decrease={this.Decrement}/>
        <Button thing={"Salad"} increase={this.Increment} decrease={this.Decrement}/>
        <div>TOTAL COST {Math.floor(this.state.tP.toFixed())} dollars</div>
        <button onClick={this.clear}>CLEAR ITEMS</button>
        <div>*</div>
        <div>*</div>
        <div>*</div>
        {this.doThings()}
        <button onClick={this.showModal} style={this.state.buttonStyle}>ORDER NOW</button>
        </div>
      )
    }
  }
