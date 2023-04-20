// write test for move func....
import Gameboard from "./gameboard";
import Player from "./player";

describe("player", () => {
  let playerOneBoard;
  let playerTwoBoard;

  beforeEach(() => {
    playerOneBoard = Gameboard();
    playerTwoBoard = Gameboard();
  });

  test("AI can move", () => {
    const AI = Player("AI", playerTwoBoard, playerOneBoard);
    playerOneBoard.placeShip(3, "vertical", [0, 0]);
    const move = AI.makeMove();
    AI.makeMove();
    AI.makeMove();
    AI.makeMove();
    AI.makeMove();
    AI.makeMove();
    console.log(move);
    console.log(AI.moves);
    expect(move).not.toBeNull();
  });
});
