const score = {
  wins: 0,
  losses: 0,
  ties: 0 
};
let divElement = document.getElementById('div');
const winsDisplay = document.getElementById('wins');
const losesDisplay = document.getElementById('loses');
const tiesDisplay = document.getElementById('ties')
const resetButton = document.getElementById('reset-button');





function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if(randomNumber>=0 && randomNumber<1/3) {
    computerMove = 'rock';
  } else if(randomNumber>=1/3 && randomNumber<2/3) {
    computerMove = 'paper';
  }else if(randomNumber>=2/3 && randomNumber<1) {
    computerMove = 'scissors';
  }

  return computerMove;
}


function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
 
  if(playerMove === 'scissors') {
    divElement.style.backgroundColor = 'yellow'
    divElement.style.color = 'black';
   
    if (computerMove === 'scissors') {
    result = 'Tie';
  }else if(computerMove ==='paper') {
    result = 'You win';
  }else if(computerMove === 'rock') {
    result = 'You lose';
  }

  } else if (playerMove === 'rock') {
    divElement.style.backgroundColor = 'pink';
    divElement.style.color = 'black';
    if (computerMove === 'rock') {
      result = 'Tie';
    }else if(computerMove ==='paper') {
      result = 'You lose';
    }else if(computerMove === 'scissors') {
      result = 'You win';
    }

  }else if(playerMove === 'paper') {
    divElement.style.backgroundColor = 'black';
    divElement.style.color = 'white'
    divElement.classList.add('paper');
    if (computerMove === 'paper') {
      result = 'Tie';
    }else if(computerMove ==='rock') {
      result = 'You win';
    }else if(computerMove === 'scissors') {
      result = 'You lose';
    }
  }
  
  


  if(result === 'You win') {
    score.wins +=1;
  }else if(result === 'You lose') {
    score.losses +=1;
  }else if(result === 'Tie') {
    score.ties +=1;
  }
  divElement.innerHTML = `You Picked ${playerMove}.Computer Picked ${computerMove}. ${result}`


 winsDisplay.innerHTML = `Wins:${score.wins}`
 losesDisplay.innerHTML = `Loses:${score.losses}`
 tiesDisplay.innerHTML = `Ties: ${score.ties}`

};






