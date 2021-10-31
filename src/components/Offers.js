import React from "react";

function Offers({ src, index, url }) {
  return (
    <>
      <a href={url}>
        <img className="img-fluid mx-2" src={src} alt={`${index + 1} offer`} />
      </a>
    </>
  );
}

export default Offers;
