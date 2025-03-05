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
    const rockButton = document.getElementById("Rock");
    rockButton.addEventListener("click", () => {
        playRound("Rock");
        getComputerChoice();
    });

    const paperButton = document.getElementById("Paper");
    paperButton.addEventListener("click", () =>{
        playRound("Paper");
        getComputerChoice();

    });

    const scissorsButton = document.getElementById("Scissors");
    scissorsButton.addEventListener("click", () => {
        playRound("Scissor");
        getComputerChoice();
    });

   // document.getElementById("Rock").addEventListener("click",()=>(playRound("Rock"), getComputerChoice()));
    //document.getElementById("Paper").addEventListener("click",()=>(playRound("Paper"), getComputerChoice()));
    //document.getElementById("Scissors").addEventListener("click",()=>(playRound("Scissors"), getComputerChoice()));


// Main game function
function playGame() {

  //sets out the plan to make the variables for the game to keep score and count it 
  let humanScore = 0;
  let computerScore = 0;

  /*for(let i = 0; i < 5; i++) {
      alert(`Round ${i+1}`);

      //lets the user input their choice
      let input = prompt("Type rock, paper, or scissors");
      //stores the functions into variables to make it usable in other parts of the code
      const humanChoice = getHumanChoice(input);
      const computerChoice = getComputerChoice();

      //gives the game logic of what happens if the result is the human or computer wins or if its a tie
      if (humanChoice) {
          alert("You chose: " + humanChoice + "\nThe computer chose: " + computerChoice);

          const result = playRound(humanChoice, computerChoice);
          
          if (result === "Human") {
              alert("You win this round!");
              humanScore++;
          } else if (result === "Computer") {
              alert("Computer wins this round!");
              computerScore++;
          } else {
              alert("It's a tie!");
          }
          
          alert("Current Scores:\nYou: " + humanScore + "\nComputer: " + computerScore);
      } else {
          alert("Invalid input. Please enter rock, paper, or scissors.");
          i--;
      }
    }
    */

  alert("Final Scores:\nYou: " + humanScore + "\nComputer: " + computerScore);

  if (humanScore > computerScore) {
      alert("You win the game!");
  } else if (computerScore > humanScore) {
      alert("Computer wins the game!");
  } else {
      alert("It's a tie game!");
  }

  let playAgain = confirm("Do you want to play again?");
  if (playAgain) {
      playGame();
  }
}

//  will start the game when it is called
playGame();
