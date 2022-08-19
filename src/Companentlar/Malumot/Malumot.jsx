import React from 'react'
import "./Malumot.css"
function Malumot(item) {
    const { id, title, body} = item;
  return (
    <div className='data'>
    <h3>Id:<span>{item.id}</span></h3>
    <h3>Nomi:<span>{item.title}</span></h3>
    <h3>Malumot:<span>{item.body}</span></h3>
    </div>
  )
}

export default Malumot