import Player from "./player";
import Gameboard from "./gameboard";

const initialSetup = () => {
  const playerOneBoard = Gameboard();
  const playerTwoBoard = Gameboard();
  const playerOne = Player("Human", playerOneBoard, playerTwoBoard);
  const playerTwo = Player("AI", playerTwoBoard, playerOneBoard);

  playerOneBoard.placeShip(3, "horizontal", [0, 0]);
  playerOneBoard.placeShip(5, "horizontal", [3, 0]);

  playerTwoBoard.placeShip(3, "horizontal", [2, 2]);
  playerTwoBoard.placeShip(5, "horizontal", [4, 0]);

  return { playerOneBoard, playerTwoBoard, playerOne, playerTwo };
};

export { initialSetup };
