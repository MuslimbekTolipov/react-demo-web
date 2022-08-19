
import './App.css';
import {Routes, Route} from "react-router-dom";
import { useState, createContext } from 'react';
import Home from './Pages/Home/Home';
import Navbar from './Companentlar/Navbar/Navbar';

import Login from './Pages/Login/Login';
import Savatcha from './Pages/Savatcha/Savatcha';
import Praduct from './Pages/Product/Praduct';
import Child from './Companentlar/Child/Child';
export const StateContext= createContext();
function App() {
  const [datas,setDatas]=useState([])
  const [savatcha,setSavatcha]=useState([])
  const [malumot,setMalumot]=useState([])
  return (
    <StateContext.Provider value={{savatcha,setSavatcha,datas,setDatas,malumot,setMalumot}}>
    <div className="App">
      <Navbar/>
      <Child/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/basket" element={<Savatcha/>} />
     <Route path="/login" element={<Login/>} />
     <Route path='/praduct/:id' element={<Praduct/>} />
     </Routes>
    </div>
     </StateContext.Provider>
  );
}

export default App;
