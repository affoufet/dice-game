import React, { useState } from "react";
import Player from "./Player";
import Dices from "./Dices";
import Button from "./Button";

export default function BoardGame() {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [players, setPlayers] = useState([
    { id: 0, name: "Player1", totalScore: 0, roundScore: 0 },
    { id: 1, name: "Player2", totalScore: 0, roundScore: 0 },
  ]);
  const [winScore, setWinScore] = useState(20);
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const changeCurrentPlayer = () => {
    let cp = currentPlayer;
    cp === players.length - 1 ? (cp = 0) : (cp += 1);
    setCurrentPlayer(cp);
  };
  const onWinScoreChange = (e) => {
    if (e.currentTarget.value > 0 || e.currentTarget.value === "") {
      setWinScore(e.currentTarget.value);
    }
  };
  const onNewGame = () => {
    setCurrentPlayer(0);
    setPlayers([
      { id: 0, name: "Player1", totalScore: 0, roundScore: 0 },
      { id: 1, name: "Player2", totalScore: 0, roundScore: 0 },
    ]);
    setWinScore(20);
    setWinner(null);
    setGameOver(false);
  };

  const onRollDice = (roll) => {
    const newPlayers = [...players];
    const player = newPlayers[currentPlayer];
    if (roll === 12) {
      player.roundScore = 0;
      changeCurrentPlayer();
    } else {
      player.roundScore = player.roundScore + roll;
    }
    newPlayers[currentPlayer] = player;
    setPlayers(newPlayers);
  };

  const onHold = () => {
    const newPlayers = [...players];
    const player = newPlayers[currentPlayer];
    player.totalScore = player.totalScore + player.roundScore;
    if (player.totalScore >= winScore) {
      player.winner = true;
      setWinner(player.id);
      setGameOver(true);
    }
    if (!gameOver) {
      player.roundScore = 0;
      setPlayers(newPlayers);
      changeCurrentPlayer();
    }
  };

  const allPlayers = players.map((p) => {
    const name = `PLAYER${p.id + 1}`; //zero based
    return (
      <Player
        key={p.id}
        id={p.id}
        name={name}
        currentPlayer={currentPlayer}
        totalScore={p.totalScore}
        roundScore={p.roundScore}
        winner={p.winner}
      />
    );
  });

  return (
    <div id="boardGame">
      <div className="players"> {allPlayers}</div>
      <div className="action">
        <Dices onClick={onRollDice} gameOver={gameOver} />
        <Button onClick={onHold} text="Hold" gameOver={gameOver} />
        <input
          id="winScore"
          type="text"
          min="0"
          value={winScore}
          onChange={onWinScoreChange}
        ></input>
      </div>
      <Button onClick={onNewGame} text="New Game" class="newGame" />
    </div>
  );
}
