import React, { useContext } from "react";
import { StateContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "./Savatcha.css";
function Savatcha(image, title, price, category, descripion, id) {
  const { savatcha, setSavatcha } = useContext(StateContext);
  const navigate = useNavigate();
  const delBtn=(id)=>{
    let filteredSavatcha=savatcha.filter(item=>item.id!== id)
    setSavatcha(filteredSavatcha);
  }
  const imgBtn = () => {
    navigate(`/praduct/${id}`);
  };
  return (
    <div className="basket">
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
          <button onClick={()=>delBtn(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Savatcha;
