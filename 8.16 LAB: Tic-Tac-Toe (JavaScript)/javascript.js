// Initialize variables
let playerTurn = true; // Flag to track if it's the player's turn
let computerMoveTimeout = 0; // Timeout ID for delaying computer's move

// Enum-like object to define game status constants
const gameStatus = {
   MORE_MOVES_LEFT: 1,
   HUMAN_WINS: 2,
   COMPUTER_WINS: 3,
   DRAW_GAME: 4
};

// Event listener when the DOM is fully loaded
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // Setup the click event for the "New game" button
   const newBtn = document.getElementById("newGameButton");
   newBtn.addEventListener("click", newGame);

   // Create click-event handlers for each game board button
   const buttons = getGameBoardButtons();
   for (let button of buttons) {
      button.addEventListener("click", function () { boardButtonClicked(button); });
   }

   // Clear the board and start a new game
   newGame();
}

// Returns an array of 9 <button> elements that make up the game board
function getGameBoardButtons() {
   return document.querySelectorAll("#gameBoard > button");
}

// Function to check for a winner or if there are more moves left
function checkForWinner() {
   const buttons = getGameBoardButtons();

   // Define winning combinations (rows, columns, diagonals)
   const possibilities = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
   ];

   // Check each winning possibility
   for (let indices of possibilities) {
      if (buttons[indices[0]].innerHTML !== "" &&
         buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
         buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {

         // Determine the winner based on the symbol ('X' or 'O')
         if (buttons[indices[0]].innerHTML === "X") {
            return gameStatus.HUMAN_WINS;
         } else {
            return gameStatus.COMPUTER_WINS;
         }
      }
   }

   // Check if there are still empty buttons indicating more moves left
   for (let button of buttons) {
      if (button.innerHTML !== "X" && button.innerHTML !== "O") {
         return gameStatus.MORE_MOVES_LEFT;
      }
   }

   // If no winner and no moves left, it's a draw
   return gameStatus.DRAW_GAME;
}

// Function to start a new game
function newGame() {
   // Clear any existing timeout for the computer's move
   clearTimeout(computerMoveTimeout);
   computerMoveTimeout = 0;

   // Reset all game board buttons
   const buttons = getGameBoardButtons();
   buttons.forEach(button => {
      button.textContent = '';
      button.classList.remove('x', 'o');
      button.disabled = false;
   });

   // Allow player to take the first turn
   playerTurn = true;

   // Update turn information on the UI
   document.getElementById('turnInfo').textContent = "Your turn";
}

// Function called when a game board button is clicked
function boardButtonClicked(button) {
   if (playerTurn) {
      // Player's move: mark the button with 'X', disable it, and switch turns
      button.textContent = 'X';
      button.classList.add('x');
      button.disabled = true;
      switchTurn();
   }
}

// Function to switch turns between player and computer
function switchTurn() {
   const status = checkForWinner();

   if (status === gameStatus.MORE_MOVES_LEFT) {
      // Toggle playerTurn for the next turn
      playerTurn = !playerTurn;

      // Update turn information based on whose turn it is
      document.getElementById('turnInfo').textContent = playerTurn ? "Your turn" : "Computer's turn";

      // If it's the computer's turn, delay the move by 1 second
      if (!playerTurn) {
         computerMoveTimeout = setTimeout(makeComputerMove, 1000);
      }
   } else {
      // Game over: disable player turn and show game result
      playerTurn = false;
      if (status === gameStatus.HUMAN_WINS) {
         document.getElementById('turnInfo').textContent = "You win!";
      } else if (status === gameStatus.COMPUTER_WINS) {
         document.getElementById('turnInfo').textContent = "Computer wins!";
      } else if (status === gameStatus.DRAW_GAME) {
         document.getElementById('turnInfo').textContent = "Draw game";
      }
   }
}

// Function for the computer to make a move
function makeComputerMove() {
   const buttons = getGameBoardButtons();
   const availableButtons = Array.from(buttons).filter(button => button.textContent === '');

   // Randomly select an available button and mark it with 'O'
   if (availableButtons.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableButtons.length);
      const button = availableButtons[randomIndex];
      button.textContent = 'O';
      button.classList.add('o');
      button.disabled = true;
      switchTurn();
   }
}
