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
    graphics.buildBoardsUI(playerOneBoard, playerTwoBoard);

    // place AI ships
    playerTwoBoard.placeShip(3, "horizontal", [2, 2]);
    playerTwoBoard.placeShip(4, "vertical", [7, 6]);
    playerTwoBoard.placeShip(2, "horizontal", [0, 5]);

    // place user ships
    graphics.displayNewGamePoppup();
    graphics.placeShips(playerOneBoard);

    // if all ships placed we can begin
    if (playerOneBoard.allShips === 5) {
      // render initial state

      // play rounds
      graphics.renderMoves(playerOne, playerTwo, playerTwoBoard);
    }
  };

  return { startGame };
}
