import React,{useState, useEffect,useContext} from 'react'
import axios from 'axios'
import Goods from "../../Companentlar/Goods/Goods"
import "./Home.css"
import { StateContext } from '../../App'
function Home() {
  const {datas,setDatas}=useContext(StateContext)
  const URL="https://fakestoreapi.com/products"
  useEffect(()=>{
    axios
    .get(URL)
    .then((res)=>setDatas(res.data))
    .catch((err)=> console.log(err.message));
  }, [])
  return (
    <div className='home'>
      <h1>Maxsulotlar</h1>
      {datas.length> 0 ?(
        <div className='all_goods'>
          {datas.map((item)=>(
            <Goods key={item.id} {...item}/>
          ))}
        </div>
      ):(
        <h2>Loading...</h2>
      )}
    </div>
  )
}

export default Home