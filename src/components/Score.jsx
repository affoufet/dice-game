import React, { Component } from "react";

const Score = (props) => {
  return (
    <div className={props.class}>
      <p className="scoreTitle">{props.title}</p>
      <p className="score">{props.score}</p>
    </div>
  );
};
export default Score;
