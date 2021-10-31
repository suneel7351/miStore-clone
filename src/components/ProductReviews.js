import React from "react";
import "../style/productReview.css";
function ProductReviews({ productReviews }) {
  return (
    <>
      <div className="productReview">
        {productReviews.map((items, index) => {
          return (
            <div className="productReviewCard">
              <img src={items.image} alt="" />
              <p>{items.review}</p>
              <span className="firstspan">{items.name}</span>
              <span className="secondspan">{items.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductReviews;
