let promptAnswer = prompt("type rock paper or sciccors to start the game good luck!")
let playerselection = promptAnswer.toLowerCase().toString

const arr = ["rock", "paper", "sciccors"];
const getrandomindex = Math.floor(Math.random() * 3);

let computerselection = arr[getrandomindex]

function playround(computerselection, playerselection){
  if(playerselection === "sciccors" && computerselection === "rock" || playerselection === "rock" && computerselection === "paper" || playerselection === "paper" && computerselection === "sciccors"){
    return `You lose! ${computerselection} beats ${playerselection}`
  }
  else{
    return `You WIN! ${playerselection} beats ${computerselection}`
  }
  }

