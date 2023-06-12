import React, { Component } from "react";

const Dice = (props) => {
  return (
    <div
      id={props.class}
      className="dice"
      style={{
        background: `white url(${props.img}) center center/cover `,
      }}
    ></div>
  );
};
export default Dice;
