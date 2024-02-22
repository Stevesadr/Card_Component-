import React from "react";
import Card from "./Card";
import style from "./CardList.module.css";

const CardList = ({ data }) => {
  console.log(data);
  return (
    <div className={`${style.cardlist_div}`}>
      {data.map((item) => {
        return <Card dataparents={item} />;
      })}
    </div>
  );
};

export default CardList;
