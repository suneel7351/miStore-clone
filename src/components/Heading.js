import React from "react";
import "../style/Heading.css";

function Heading(props) {
  return (
    <>
      <div className="heading mt-3">
        {" "}
        <div></div>
        <p>{props.text}</p>
        <div></div>
      </div>
    </>
  );
}

export default Heading;
