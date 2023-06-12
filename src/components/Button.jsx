import React, { useState, useEffect } from "react";

const Button = (props) => {
  const [className, setClassName] = useState("btn ");
  useEffect(() => {
    if (props.class) {
      setClassName(className + props.class);
    } else if (props.gameOver) {
      setClassName(className + " btnDisable ");
    } else {
      setClassName("btn ");
    }
  }, [props.class, props.gameOver]);

  return (
    <button className={className} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
export default Button;
