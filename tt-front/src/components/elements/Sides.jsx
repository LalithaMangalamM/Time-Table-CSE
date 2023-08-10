import React from "react";
import "./sides.css"


let Sides = (props) => {
  let source = props.source;
  console.log(source);
  return (
    <div className="image-container">
      <img src={source} alt="Image" />
    </div>
  );
};

export default Sides;
