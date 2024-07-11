The game allows a player to compete against a computer. The player marks "X" and the computer marks "O" on a 3x3 grid. The first player to align three of their marks either horizontally, vertically, or diagonally wins the game. If all cells are filled without a winner, the game ends in a draw.
`playerTurn`: Boolean flag to track if it's the player's turn (`true`) or computer's turn (`false`).
`computerMoveTimeout`: Timeout ID for delaying the computer's move.
`gameStatus`: Enum-like object defining game statuses:
`MORE_MOVES_LEFT`: Indicates more moves are available.
`HUMAN_WINS`: Player wins the game.
`COMPUTER_WINS`: Computer wins the game.
`DRAW_GAME`: Game ends in a draw.
The game starts by initializing event listeners when the DOM is fully loaded. It sets up event handlers for the "New game" button and each game board button.
`getGameBoardButtons()`: Returns an array of all game board buttons.
`checkForWinner()`: Checks for a winner by examining all possible winning combinations of the game board.
`newGame()`: Resets the game board, clears timeouts, and allows the player to take the first turn.
`boardButtonClicked(button)`: Handles clicks on game board buttons. Marks the button with 'X', disables it, and switches turns.
`switchTurn()`: Controls the flow of turns between the player and the computer based on game status.
`makeComputerMove()`: Initiates the computer's move by selecting an available button randomly and marking it with 'O'.
The game updates the turn information displayed on the UI to indicate whose turn it is ("Your turn" or "Computer's turn"). It also updates the UI to show the game result when the game ends (player wins, computer wins, or draw).
