import Player from "./player";
import Gameboard from "./gameboard";
import GraphicsController from "./ui";

export default function Game() {
  const graphics = GraphicsController();
  // construct the players and boards
  const playerOneBoard = Gameboard();
  const playerTwoBoard = Gameboard();
  const playerOne = Player(playerOneBoard, playerTwoBoard);
  const playerTwo = Player(playerTwoBoard, playerOneBoard);

  const startGame = () => {
    // initial setup
    playerOneBoard.placeShip(3, "horizontal", [7, 5]);
    playerOneBoard.placeShip(5, "horizontal", [3, 2]);
    playerOneBoard.placeShip(2, "horizontal", [8, 2]);

    playerTwoBoard.placeShip(3, "horizontal", [2, 2]);
    playerTwoBoard.placeShip(4, "vertical", [7, 6]);
    playerTwoBoard.placeShip(2, "horizontal", [0, 5]);

    // render initial state
    graphics.displayBoards(playerOneBoard, playerTwoBoard);
    graphics.displayShips(playerOneBoard, playerTwoBoard);

    // play rounds
    graphics.renderMoves(playerOne, playerTwo, playerTwoBoard);
  };

  return { startGame };
}
