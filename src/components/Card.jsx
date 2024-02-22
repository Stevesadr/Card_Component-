import React from "react";
import style from "./Card.module.css";
import Button from "./Button";

const Card = ({ dataparents }) => {
  return (
    <div className={`${style.contentDiv}`}>
      <div>
        <img src={dataparents.img} className={`${style.img_Content}`} />
      </div>
      <div>
        <h1 className={`${style.main_text}`}>{dataparents.Title}</h1>
        <p className={`${style.information_text}`}>{dataparents.Description}</p>
      </div>
      <div className={`${style.btn_div}`}>
        {<Button type="submit">Shop Now</Button>}
      </div>
    </div>
  );
};

export default Card;
