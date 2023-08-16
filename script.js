let promptAnswer = prompt("type rock paper or sciccors to start the game good luck!")
let playerselection = promptAnswer.toLowerCase()


function computerchoice(){
  const arr = ["rock", "paper", "sciccors"];
   return arr[Math.floor(Math.random() * 3)]
  }
const computerselection = computerchoice();


let winmessage = `You WIN! ${playerselection} beats ${computerselection}`
let losemessage = `You lose! ${computerselection} beats ${playerselection}`
let draw = `Its a draw`


function game(){
let playerscore = 0;
let computerscore = 0;

  for(let i = 0;i < 5; i++){
   const computerselection = computerchoice();
   console.log(`Round ${i + 1}`)
   console.log(`computer Chose: ${computerselection}`)

   function playround(computerselection, playerselection){
    if(computerselection == playerselection){
      return draw;
    }
    else if(playerselection =="sciccors" && computerselection == "rock" || playerselection == "rock" && computerselection == "paper" || playerselection == "paper" && computerselection =="sciccors"){
      return `You lose! ${computerselection} beats ${playerselection}`;
  }
    else{
      return `You WIN! ${playerselection} beats ${computerselection}`;
    }
  }

   const result = playround(computerselection, playerselection)
   console.log(result)
   if(result == winmessage){
    playerscore++;
   }else if(result == losemessage){
    computerscore++;
   }

}
console.log(playerscore)
console.log(computerscore)
if(playerscore == computerscore){
  console.log("its a tie")
}
else if(playerscore > computerscore){
  console.log("You win the overall play")
}
else{
  console.log("You lost the overall play ")
}
}