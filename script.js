const btns = document.querySelectorAll('button')
const messageP = document.querySelector('#message')
const userSpan = document.querySelector('#user')
const compSpan = document.querySelector('#comp')
let playerscore = 0;
let computerscore = 0;

function computerchoice(){
  const arr = ["Rock", "Paper", "Scissors"];
   return arr[Math.floor(Math.random() * 3)]
  }

btns.forEach((selection) => {
  selection.addEventListener('click', () => {
  var  computerselection = computerchoice();
  var playerselection = selection.innerText;
   playround(playerselection,computerselection);
  });
});

function getSubscriptOf(word){
  return word.sub();
}

function win(playerselection, computerselection){
  playerscore++;
  userSpan.innerHTML = playerscore;
  compSpan.innerHTML = computerscore;
  messageP.innerHTML = `You win ${playerselection}${getSubscriptOf('user')} beats ${computerselection}${getSubscriptOf('comp')}`

 }
 function lose(playerselection, computerselection){
  computerscore++;
  compSpan.innerHTML = computerscore;
  userSpan.innerHTML = playerscore;
  messageP.innerHTML = `You lose ${playerselection}${getSubscriptOf('user')} beats ${computerselection}${getSubscriptOf('comp')}`

 }
 function draw(playerselection, computerselection){
  messageP.innerHTML = `its a tie ${playerselection}${getSubscriptOf('user')} is equal to ${computerselection}${getSubscriptOf('comp')}`

 }
 function playround(playerselection, computerselection){
 
 switch(playerselection + computerselection){
   case "PaperRock":
   case "ScissorsPaper":
   case "RockScissors":
    console.log(playerselection)
    console.log(computerselection)
     win(playerselection, computerselection);
     break;
   case "RockPaper":
   case "PaperScissors":
   case "ScissorsRock":
    console.log(playerselection)
    console.log(computerselection)
     lose(playerselection, computerselection);
     break;
   case "PaperPaper":
   case "RockRock":
   case "ScissorsScissors":
    console.log(playerselection)
    console.log(computerselection)
     draw(playerselection, computerselection);
     break;
   default:
     console.log(playerselection)
     console.log(computerselection)
     console.log(playerselection + computerselection)
     console.log("You executed the last switch statement")
 }
}




