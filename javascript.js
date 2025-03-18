


  //sets out the plan to make the variables for the game to keep score and count it 
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  // Function to get the computer's choice
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return "Rock";
    } else if (randomNumber < 2 / 3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}



// Function to play a single round
function playRound(humanChoice, computerChoice) {

  if(humanChoice === computerChoice){
      return "Tie";
  }
  if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
      return "Human";
  }
  return "Computer";
}








    function updateScore(result, humanChoice, computerChoice){

        if (result === "Human") {
            humanScore++;

        
        }else if (result === "Computer")
            computerScore++;

            roundsPlayed++;

            document.getElementById("roundsBox").value = `Rounds Played: ${roundsPlayed}`;
            document.getElementById("scoreBox").value = `Your Score: ${humanScore}\nComputer Score: ${computerScore}`;

             // Update the results box
            document.getElementById("resultsBox").value = `You chose: ${humanChoice}\nComputer chose: ${computerChoice}\nResult: ${result}`;

                // Check if the game is over
                checkGameRounds();

            
    }

    function checkGameRounds(){

        if(roundsPlayed === 5){
           document.getElementById("resultsBox").value += `\nGame Over! Final Scores:\nYou: ${humanScore}\nComputer: ${computerScore}`;
        resetGame();
        }
    }

    function resetGame(){

         humanScore = 0;
         computerScore = 0;
         roundsPlayed = 0;
        document.getElementById("scoreBox").value = '';
        document.getElementById("resultsBox").value = '';
        
    }


    document.addEventListener("DOMContentLoaded", () => {
        const rockButton = document.getElementById("Rock");
      const paperButton = document.getElementById("Paper");
      const scissorsButton = document.getElementById("Scissors");
    //has the text boxes
    //   const scoreBox = document.getElementById("scoreBox");
    //   const roundsBox = document.getElementById("roundsBox");
    //   const resultsBox = document.getElementById("resultsBox");
      
        //what will happen when I press the rock button
        //register this as human's choice and compare against computer choice
      
        // const textArea = document.getElementById("resultsBox");
    
    
        
        rockButton.addEventListener("click", () => {
    
            const humanChoice = "Rock";
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);
            updateScore(result, humanChoice, computerChoice);
        });
      
      
     
        
        
        paperButton.addEventListener("click", () => {
            const humanChoice = "Paper";
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);
            updateScore(result, humanChoice, computerChoice);
            
        });
    //added code from the top part r1
    
    
    scissorsButton.addEventListener("click", () => {
        const humanChoice = "Scissors";
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);
            updateScore(result, humanChoice, computerChoice);
    });
    });   
}
