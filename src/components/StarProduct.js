import React from "react";
import "../style/StarProduct.css";

function StarProduct({ StarProduct }) {
  return (
    <>
      <div className="starproduct">
        <div className="leftSide">
          <a href={StarProduct[0].url}>
            <img src={StarProduct[0].image} alt="" />
          </a>
        </div>
        <div className="rightSide">
          <div className="rightSubUpper">
            <a href={StarProduct[1].url}>
              <img src={StarProduct[1].image} alt="" />
            </a>
            <a href={StarProduct[2].url}>
              <img src={StarProduct[2].image} alt="" />
            </a>
          </div>
          <div className="rightSubLower">
            {" "}
            <a href={StarProduct[3].url}>
              <img src={StarProduct[3].image} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default StarProduct;
