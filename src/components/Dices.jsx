import React, { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

export default function Dices(props) {
  const [dices, setDices] = useState([1, 1]);
  const url1 = `./img/dice-${dices[0]}.png`;
  const url2 = `./img/dice-${dices[1]}.png`;

  const onRollDice = () => {
    const d = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    setDices(d);
    props.onClick(d[0] + d[1]);
  };
  return (
    <div className="dices">
      <Dice id="dice1" img={url1} value={dices[0]} />
      <Dice id="dice2" img={url2} value={dices[1]} />
      <Button onClick={onRollDice} text="Roll" gameOver={props.gameOver} />
    </div>
  );
}
