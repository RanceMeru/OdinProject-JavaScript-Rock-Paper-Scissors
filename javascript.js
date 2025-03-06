// Function to get the human's choice
function getHumanChoice(input) {
  switch(input.toLowerCase()) {
      case "rock":
          return "Rock";
      case "paper":
          return "Paper";
      case "scissors":
          return "Scissors";
      default:
          return null;
  }
}

// Function to get the computer's choice
function getComputerChoice() {
  //Math.Random() only generates a number 0 to 1 so break it into 1/3 to still stay in constraints
  const randomNumber = Math.random();
  if (randomNumber < 1/3) {
      return "Rock";
  } else if (randomNumber < 2/3) {
      return "Paper";
  } else {
      return "Scissors";
  }
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  //makes the input case insensitive
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if(humanChoice === computerChoice){
      return "Tie";
  }
  if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
  ) {
      return "Human";
  }
  return "Computer";
}
//event listeners
//experiment with the playround parameter to be capitalized or lowercase

//recheck this to have see if we need const rockButton
    const rockButton = document.getElementById("Rock");
    rockButton.addEventListener("click", () => {
        playRound("Rock");
        getComputerChoice();
    });
    rockButton.addEventListener("click", () => {
        const humanChoice = "Rock";
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        updateScore(result); // Function to update scores
        displayResult(result); // Function to display the result in the text box
    });
//do the above for rock paper scissors(make it shorter depending on that they click loop?)




    const paperButton = document.getElementById("Paper");
    paperButton.addEventListener("click", () =>{
        playRound("Paper");
        getComputerChoice();

    });
    rockButton.addEventListener("click", () => {
        const humanChoice = "Paper";
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        updateScore(result); // Function to update scores
        displayResult(result); // Function to display the result in the text box
    });
//added code from the top part r1

    const scissorsButton = document.getElementById("Scissors");
    scissorsButton.addEventListener("click", () => {
        playRound("Scissor");
        getComputerChoice();
    });

    rockButton.addEventListener("click", () => {
        const humanChoice = "Scissor";
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        updateScore(result); // Function to update scores
        displayResult(result); // Function to display the result in the text box
    });

   // document.getElementById("Rock").addEventListener("click",()=>(playRound("Rock"), getComputerChoice()));
    //document.getElementById("Paper").addEventListener("click",()=>(playRound("Paper"), getComputerChoice()));
    //document.getElementById("Scissors").addEventListener("click",()=>(playRound("Scissors"), getComputerChoice()));


// Main game function
function playGame() {

  //sets out the plan to make the variables for the game to keep score and count it 
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

    function updateScore(){

        if (result === "Human") {
            humanScore++;

        
        }else if (result === "Computer")
                computerScore++;
        

    }

    function revealResults(result){

        const resultBox = document.getElementById("Results");
        resultBox.textContent = `Result: ${result}`;
        
    }


   
    function checkGameRounds(){

        if(roundsPlayed === 5){
            const resultBox = document.getElementById("Result");
            resultBox.textContent = `Game Over! Final Scores:\nYou: ${humanScore}\nComputer: ${computerScore}`;
            resetGame(); // Function to reset scores and rounds

        }
    }



}
playGame();
