import React, { useState,useEffect } from 'react'
import Score from './Score'


export default function Player(props) {
  const [className, setClassName] = useState("player")

useEffect(() => {
  if(props.currentPlayer === props.id){
    setClassName(className + " currentPlayer")

  }
  else {
    setClassName("player")

  }
  
}, [props.currentPlayer === props.id])

useEffect(() => {
  if(props.winner){
    setClassName(className + " winner")
    
  }
  else{
    setClassName("player")
    
  }

}, [props.winner])
  return (


  <div id={props.id} className={className}>
  <h3 className="playerName">{props.name}</h3>
  <Score class="totalScore" title="Total Points" score={props.totalScore} />
  <Score class="roundScore" title="Current Round" score={props.roundScore} />
  <p className={!props.winner ? "hidden" : ""}>YOU ARE THE WINNER!</p>

</div>
)
}