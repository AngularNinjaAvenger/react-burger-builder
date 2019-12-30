import React from 'react'
import './Modal.css'
import Button from './Button';
export default (props) => {
  return (
    <div style={{
        position: "fixed",
        "zIndex": "500",
        backgroundColor: "white",
        width: "70%",
        border: "10px solid #ccc",
        boxShadow: "1px 1px 1px black",
        padding: "16px",
        left: "15%",
        top: "30%",
        boxSizing:" border-box",
        transition:" all 0.3s ease-out",}}>
      {props.children}
      <input type="submit" value="finally"/>
      <input type="submit" onClick={props.changeModalState} value="close Modal"/>
    </div>
  )
}
