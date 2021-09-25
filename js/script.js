function computerPlay()  {
    let val = Math.random() * 3 ;
    if (val < 1) {
        return 'rock'
    } else if ( val < 2) {
        return 'scissors'
    } else {return 'paper'} ;
    

}


function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection)
    if (playerSelection == computerSelection) {
        return "You tied! " 
    } else if (playerSelection ==     'rock' && computerSelection  == 'paper' 
            || playerSelection ==    'paper' && computerSelection  == 'scissors'  
            || playerSelection == 'scissors' && computerSelection  == 'rock'){
        return "You lose, " + playerSelection + " beats " + computerSelection + "."
    } else if (computerSelection ==     'rock' && playerSelection  == 'paper' 
            || computerSelection ==    'paper' && playerSelection  == 'scissors'  
            || computerSelection == 'scissors' && playerSelection  == 'rock') {
        return "You win, " + playerSelection + " beats " + computerSelection + "."
            }
      else {return "Please enter a valid word"}

}

function game() {
    let roundNumber = 5;
    let computerScore = 0;
    let playerScore   = 0;
    for (let i = 0; i < roundNumber; i++) 
    {
        //currentSelection = prompt("Please enter your RPS choice");
        output =playRound(currentSelection, computerPlay());
        console.log(output);
        if (output.includes("win")) {
            playerScore += 1
        } else if (output.includes("lose")) {
            computerScore += 1
        } 
        //console.log("Current player score " + playerScore);
        //console.log("Current computer score " + computerScore);
        }
    }
   


game()

function updateScore(e) {
    const 
}