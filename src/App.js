import './App.css';
import React,{useState} from 'react';

import Box from './componants/Box'
import {Bored}  from './componants/Bored';


function App() {

  const WINNING_COMBINATIONS = [
    [0,1,2], // top row
    [3,4,5], // mid row
    [6,7,8], // bottom row
    [0,3,6], // left col
    [1,4,7], // mid col
    [2,5,8], // right col
    [0,4,8], // left diagonal
    [2,4,6], // right diagonal
  ]
  
  var theWinner = null;

  const winner = (board) => {
    for(var i=0; i<WINNING_COMBINATIONS.length; i++){
      const [a,b,c] = WINNING_COMBINATIONS[i];

      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        return board[a];
      }
    }
  }

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  if(board.every((value) => value !== null)){
    theWinner = 'Game is a draw';
  }
  if(winner(board)){
    theWinner = winner(board) + ' is the winner';
  }

  const handleBoxClick = (boxIdx) => {
    const updateBoard = board.map((value,idx) => {
        if(value !== null){
          return value;
        }
        else if(idx === boxIdx){
        return isXNext ? 'X' : 'O';
      }
      else{
        return value;
      }
    })
    
    setBoard(updateBoard);
    setIsXNext(!isXNext);
  }

  return (
    <div className="App">
         <Bored board={board}  onClick={handleBoxClick}/>
         <text>{theWinner}</text>
      </div>
  );
};

export default App;
