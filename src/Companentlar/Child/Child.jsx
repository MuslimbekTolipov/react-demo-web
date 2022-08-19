import React,{useState, useEffect,useContext} from 'react'
import "./Child.css"
import axios from 'axios'
import { StateContext } from '../../App'
import Malumot from '../Malumot/Malumot'
function Child() {
    const {malumot,setMalumot}=useContext(StateContext)
    const URL="https://jsonplaceholder.typicode.com/posts"
    console.log(URL)
    useEffect(()=>{
        axios
        .get(URL)
        .then((res)=>setMalumot(res.data))
        .catch((err)=> console.log(err.message));
      }, [])
  return (
    <div className='child'>
      {malumot.length> 0 ?(
        <div className='all_child'>
          {malumot.map((item)=>(
            <Malumot key={item.id} {...item}/>
          ))}
        </div>
      ):(
        <h2>Iltimos kuting</h2>
      )}
    </div>
  )
}

export default Child