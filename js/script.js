let computerScore = 0;
let playerScore   = 0;
const playerContent = document.querySelector('.span-player'); // dynamic text boxes that updates with score
const compContent   = document.querySelector('.span-comp');




function computerPlay()  {
    let val = Math.random() * 3 ;       // equal probability of R/P/S
    if (val < 1) {
        return 'rock'
    } else if ( val < 2) {
        return 'scissors'
    } else {return 'paper'} ;
    

}


function playRound(playerSelection) {
    
    let computerSelection = computerPlay();
    if (playerSelection ==     'rock' && computerSelection  == 'paper' 
            || playerSelection ==    'paper' && computerSelection  == 'scissors'  
            || playerSelection == 'scissors' && computerSelection  == 'rock'){
        computerScore += 1;
    } else if  (computerSelection ==     'rock' && playerSelection  == 'paper' 
            || computerSelection ==    'paper' && playerSelection  == 'scissors'  
            || computerSelection == 'scissors' && playerSelection  == 'rock') 
            { playerScore += 1;
    }
    updateContent();
    if (playerScore >= 5 || computerScore >= 5 ) {announceWinner()}

}




function updateContent() {
    playerContent.textContent= playerScore;
    compContent.textContent= computerScore;


}

function announceWinner() {
    if (playerScore > computerScore) {
        alert("Congrats you won!")
    } else {
        alert("Better luck next time buddy")
    }

}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {    // on each click from the user, the playRound function is initiated
    let playerSelection;
    playerSelection = button.id;
    playRound(playerSelection);
    
     }));
      

   

