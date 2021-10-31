import React from "react";
import '../style/Navcard.css'

function Navcard({ name, price, image }) {
  return (
    <>
      <div className="navcard">
        <img src={image} alt={name} />
        <p>{name}</p>
        <span>{price}</span>
      </div>
    </>
  );
}

export default Navcard;
