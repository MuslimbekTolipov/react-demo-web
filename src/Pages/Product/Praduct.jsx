import React, { useContext } from 'react'
import "./Praduct.css"
import { StateContext } from "../../App";
import { useNavigate } from "react-router-dom";
function Praduct(image, title, price, category, descripion, id) {
    const { savatcha, setSavatcha } = useContext(StateContext);
    const navigate = useNavigate();
    const imgBtn = () => {
      navigate(`/praduct/${id}`);
    };
  return (
    <div>
      {savatcha?.map((item) => (
        <div>
          <img onClick={imgBtn} src={item.image} alt="" />
          <p>
            <span>Nomi</span>
            {item.title}
          </p>
          <p>
            <span>Narxi</span>
            {item.price}
          </p>
          <p>
            <span>Kategorya</span>
            {item.category}
          </p>
          <p>
            <span>Ma'lumot</span>
            {item.descripion}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Praduct