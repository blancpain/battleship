import Player from "./player";
import Gameboard from "./gameboard";
import GraphicsController from "./ui";

const playerOneBoard = Gameboard();
const playerTwoBoard = Gameboard();

export default function Game() {
  const startGame = () => {
    const graphics = GraphicsController();
    // reset boards if needed
    playerOneBoard.resetBoard();
    playerOneBoard.resetShips();
    playerTwoBoard.resetBoard();
    playerTwoBoard.resetShips();

    // construct the players and boards
    const playerOne = Player(playerOneBoard, playerTwoBoard);
    const playerTwo = Player(playerTwoBoard, playerOneBoard);
    graphics.buildBoardsUI(playerOneBoard, playerTwoBoard);

    // place ships AI
    playerTwoBoard.placeShipsAI();
    // place ships user
    graphics.displayNewGamePoppup();
    graphics.placeShips(playerOneBoard);

    // play rounds
    graphics.renderMoves(playerOne, playerTwo, playerTwoBoard);
  };

  return { startGame };
}
