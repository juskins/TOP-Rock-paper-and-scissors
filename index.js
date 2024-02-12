const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors');
const showPlayerScore = document.querySelector('.player-score');
const player1Pick = document.querySelector('.player1-pick');
const computerPick = document.querySelector('.computer-pick');
const showComputerScore= document.querySelector('.computer-score');
const endGame = document.querySelector('.end-game');
const gameDiv = document.querySelector('.game-picks');
const displaytrials = document.querySelector('.trials');
const finalWinner = document.querySelector('.final-winner');
const gifsDiv = document.querySelector('.gifs-div');
const displayPlayerSelection = document.querySelector('.player-selection');
const displayComputerSelection = document.querySelector('.computer-selection');
const output = document.querySelector('.output');
const date = document.querySelector('.match-date');


let playerScore =0;
let computerScore = 0;
let trials = 5;
let gameEnded = false;


function getComputerChoice(){
     let gamePicks = ['rock','paper','scissors'];
     let randNum = Math.trunc(Math.random() * 3);
     displayComputerSelection.textContent = gamePicks[randNum];
     if(gamePicks[randNum] === 'rock'){
          displayComputerSelection.style.color = '#41206f'
     }
     else if(gamePicks[randNum] === 'paper'){
          displayComputerSelection.style.color = 'orange'
     }
     else{
          displayComputerSelection.style.color = 'red'
     }
     displayPlayerSelection.style.fontSize = '2rem';
     computerPick.innerHTML = `<img src='images/${gamePicks[randNum]}.jfif'>`
     return gamePicks[randNum];
}



function getPlayerChoice(choice){
     displayPlayerSelection.textContent = choice;
     
     if(choice === 'rock'){
          displayPlayerSelection.style.color = '#41206f'
     }
     else if(choice === 'paper'){
          displayPlayerSelection.style.color = 'orange'
     }
     else{
          displayPlayerSelection.style.color = 'red'
     }
     displayPlayerSelection.style.fontSize = '2rem'
     return choice;
}


function playRound(player, computer){
     let winner;
      if (
               (player === 'rock' && computer === 'scissors') ||
               (player === 'paper' && computer === 'rock') ||
               (player === 'scissors' && computer === 'paper')
          ){
               winner = 'player';
               playerScore++;
               
               output.textContent = 'PLayer WINS!!!!'
          }
     else if(player === computer){
          winner = 'Nobody'
          output.textContent = 'It is a TIE!!!!'
     }
     else{
          winner = 'computer';
          computerScore +=1;
          output.textContent = 'Computer WINS!!!!'
     }
     

     return (`computer plays: ${computer}
     You play: ${player}
     ${winner} WINS!!!!!!!`) 
          
     }


function updateScoreBoard(){
     showPlayerScore.textContent = playerScore;
     showComputerScore.textContent = computerScore;
     displaytrials.textContent = '-' + trials;
     gameDiv.style.display = 'block';
          setTimeout(() => {
               gameDiv.style.display = 'none';
          }, 2700);
}


function endgame(){
     trials = 5;
     showPlayerScore.textContent = playerScore;
     showComputerScore.textContent = computerScore;
     endGame.textContent = 'Game Ended';
     displaytrials.textContent = '-' + trials;
     setTimeout(() => {
          endGame.textContent = 'Play Again'
     }, 2000);
     gameEnded = true;
     
  }


function getDate(date) {
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
'September', 'October', 'November', 'December'];
const day = date.getDate();
const month = months[date.getMonth()];
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const formattedHours = hours % 12 || 12;
return `${day} ${month} at ${formattedHours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


function checkTrials(trials){
     if(trials === 0){
          if(playerScore > computerScore){
               finalWinner.textContent = 'YOU WON'
               gifsDiv.setAttribute('class','display')
               setTimeout(() => {
                    gifsDiv.setAttribute('class','gifs-div')
               }, 3000);
               }
          else if(playerScore < computerScore){
               finalWinner.textContent = 'COMPUTER WON';
          }
          else{
               finalWinner.textContent = 'GAME ENDED IN A DRAW'
          }
          endgame();
     }
}



function updateClock(){
     const currentDate = new Date();
     const formattedDate = getDate(currentDate);
     date.textContent = formattedDate;
}

setInterval(() => {
     updateClock()
}, 1000);



rock.addEventListener('click',()=>{
     if(gameEnded || endGame.textContent == 'Play game') return;
     console.log(playRound(getPlayerChoice('rock'),getComputerChoice()));
     player1Pick.innerHTML = "<img src='images/rock.jfif'>"
     trials--;
     finalWinner.textContent = 'GAME ON'
    checkTrials(trials);
     updateScoreBoard()

    
 })


 
 paper.addEventListener('click',()=>{
     if(gameEnded || endGame.textContent == 'Play game') return;
      console.log(playRound(getPlayerChoice('paper'),getComputerChoice()));
      player1Pick.innerHTML = "<img src='images/paper.jfif'>";
      trials--;
     finalWinner.textContent = 'GAME ON'
     checkTrials(trials);
     updateScoreBoard()
     

  })


 
  scissors.addEventListener('click',()=>{
     if(gameEnded || endGame.textContent == 'Play game') return;
      console.log(playRound(getPlayerChoice('scissors'),getComputerChoice()))
      player1Pick.innerHTML = "<img src='images/scissors.jfif'>";
      trials--;
     finalWinner.textContent = 'GAME ON'
     checkTrials(trials);

      updateScoreBoard()


  })




 endGame.addEventListener('click',()=>{
     if(endGame.textContent == 'End game'){
         endGame.textContent = 'Play game';
         endGame.style.backgroundColor = "orange"
         if(playerScore > computerScore){
          finalWinner.textContent = 'YOU WON'
          }
          else if(playerScore < computerScore){
               finalWinner.textContent = 'COMPUTER WON'
          }
          else{
               finalWinner.textContent = 'GAME ENDED IN A DRAW'
          }
          playerScore = 0;
          computerScore = 0;
          
         endgame()
     }
     else if(endGame.textContent == 'Play game' || endGame.textContent == 'Play Again'){
          endGame.textContent = 'End game';
          endGame.style.backgroundColor = "#41206f"
          playerScore = 0;
          computerScore = 0;
          finalWinner.textContent = 'GAME ON'
          showPlayerScore.textContent = playerScore;
          showComputerScore.textContent = computerScore;
          gameEnded = false;
     }
     
 })













    
     
      
     
     



