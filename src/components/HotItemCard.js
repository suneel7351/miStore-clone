import React from "react";
import "../style/HotItemCard.css";
function HotItemCard({ image, index, name, price }) {
  return (
    <>
      <div className="HotItemCard">
        <img src={image} alt="" />
        <p className="text-center">{name}</p>
        <span className="text-center">{price}</span>
      </div>
    </>
  );
}

export default HotItemCard;
