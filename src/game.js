import Player from "./player";
import Gameboard from "./gameboard";

const initialSetup = () => {
  const playerOneBoard = Gameboard();
  const playerTwoBoard = Gameboard();
  const playerOne = Player("Human", playerOneBoard, playerTwoBoard);
  const playerTwo = Player("AI", playerTwoBoard, playerOneBoard);

  playerOneBoard.placeShip(3, "horizontal", [7, 5]);
  playerOneBoard.placeShip(5, "horizontal", [3, 2]);
  playerOneBoard.placeShip(2, "horizontal", [8, 2]);

  playerTwoBoard.placeShip(3, "horizontal", [2, 2]);
  playerTwoBoard.placeShip(4, "vertical", [7, 6]);
  playerTwoBoard.placeShip(2, "horizontal", [0, 5]);

  return { playerOneBoard, playerTwoBoard, playerOne, playerTwo };
};

export { initialSetup };
