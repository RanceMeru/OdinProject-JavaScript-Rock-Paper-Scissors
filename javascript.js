

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






// Main game function
function playGame() {

  //sets out the plan to make the variables for the game to keep score and count it 
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;


  const rockButton = document.getElementById("Rock");
  const paperButton = document.getElementById("Paper");
  const scissorsButton = document.getElementById("Scissors");
//has the text boxes
  const scoreBox = document.getElementById("scoreBox");
  const roundsBox = document.getElementById("roundsBox");
  const resultsBox = document.getElementById("resultsBox");
  
    //what will happen when I press the rock button
    //register this as human's choice and compare against computer choice
  document.addEventListener("DOMContentLoaded", () => {
    const rockButton = document.getElementById("Rock");
    const textArea = document.getElementById("resultsBox");
    
    rockButton.addEventListener("click", () => {

        //what will display when you choose rock
      textArea.value = "The computer chose :"+ {getComputerChoice}/n +"Your choice was Rock" ;
    });
  })
  
  
  



  
  rockButton.addEventListener("click", () => {
      const humanChoice = "Rock";
      const computerChoice = getComputerChoice();
      console.log("Clicked Rock");
       
  });

 
    
    
    paperButton.addEventListener("click", () => {
        const humanChoice = "Paper";
        const computerChoice = getComputerChoice();
        console.log("Paper");
        
    });
//added code from the top part r1


scissorsButton.addEventListener("click", () => {
    const humanChoice = "Scissors";
    const computerChoice = getComputerChoice();
    console.log("Scissors");
});



  


    function updateScore(){

        if (result === "Human") {
            humanScore++;

        
        }else if (result === "Computer")
            computerScore++;
           scoreBox.value = `Rounds Played: ${roundsPlayed}\nYour Score: ${humanScore}\nComputer Score: ${computerScore}`;

    }
    //make the score update in the score textbox
//revisit and result box is going to show who won "the commentary"
    //Score shows the who won in the end
    //set revealResult to ""
    function revealResults(result){

        const resultBox = document.getElementById("resultBox");
        resultBox.textContent = `Result: ${result}`;
        
    }


   
    function checkGameRounds(){

        if(roundsPlayed === 5){
            const resultBox = document.getElementById("Result");
            resultBox.textContent = `Game Over! Final Scores:\nYou: ${humanScore}\nComputer: ${computerScore}`;
            resetGame(); // Function to reset scores and rounds

        }
    }

    function resetGame(){

            index.reload();
        
    }


}
playGame();
