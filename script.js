const btn = document.querySelectorAll('button')
console.log(btn)
btn.forEach((selection) => {
  selection.addEventListener('click', () => {
    playerselection = selection.innerText;
    console.log(playerselection)
  })
});

function computerchoice(){
  const arr = ["rock", "paper", "sciccors"];
   return arr[Math.floor(Math.random() * 3)]
  }
const computerselection = computerchoice();


let winmessage = `You WIN! ${playerselection} beats ${computerselection}`
let losemessage = `You lose! ${computerselection} beats ${playerselection}`
let draw = `Its a draw`


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
