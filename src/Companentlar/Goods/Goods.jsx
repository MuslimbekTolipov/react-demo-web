import React, { useContext, useState } from "react";
import "./Goods.css";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../App";
function Goods(item) {
  const navigate = useNavigate();
  const { id, title, image, description, price, category } = item;
  const { savatcha, setSavatcha } = useContext(StateContext);
  const imgBtn = () => {
    navigate(`/praduct/${id}`);
  };
  const addBtn = () => {
    const obj =savatcha.length > 0 && savatcha.some((item) => item.id === Number(id));
    console.log(obj);
    if (obj) {
      alert("Bu mahsulot savatchaga qo'shilgan!!!");
      return;
    }
    setSavatcha([...savatcha, item]);

    alert("Maxsulot savatchaga qo'shildi!!!");
  };
  return (
    <div className="goods">
      <img onClick={imgBtn} src={image} alt="" />
      <p>
        <span>Nomi</span>
        {title}
      </p>
      <p>
        <span>Narxi</span>
        {price}
      </p>
      <p>
        <span>Kategorya</span>
        {category}
      </p>
      <button onClick={addBtn}>Add Product</button>
    </div>
  );
}

export default Goods;
