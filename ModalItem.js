import React from 'react'

export default ({ingredient,total}) => {
    let joma = Object.keys(ingredient).map((item)=>{
        return <li key={item}>{item} : {ingredient[item]}</li>
    })
    return (
    <div>
    <ul>
    {joma}
    </ul>
    </div>
  )
}
