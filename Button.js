import React from 'react'

export default ({thing,increase,decrease}) => {
  return (
    <div>
    {thing}
    <button onClick={()=>{decrease(thing)}}>decrease</button>
    <button onClick={()=>{increase(thing)}}>increase</button>
    </div>
  )
}
