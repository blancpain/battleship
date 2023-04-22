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
    expect(move).not.toBeNull();
  });

  test("AI moves are properly recorded", () => {
    const AI = Player("AI", playerTwoBoard, playerOneBoard);
    AI.makeMove();
    expect(AI.moves.size).toBe(1);
  });

  test("Player move targets correct square on board - miss", () => {
    const player = Player("Human", playerOneBoard, playerTwoBoard);
    player.makeMove([0, 0]);
    expect(playerTwoBoard.missedShots[0]).toBe(
      playerTwoBoard.getSquare([0, 0])
    );
  });

  test("Player move targets correct squares on board - hits", () => {
    const player = Player("Human", playerOneBoard, playerTwoBoard);
    playerTwoBoard.placeShip(3, "horizontal", [0, 0]);
    player.makeMove([0, 0]);
    player.makeMove([0, 1]);
    expect(playerTwoBoard.allShips[0].getHits()).toBe(2);
  });

  test("Player sinks ship", () => {
    const player = Player("Human", playerOneBoard, playerTwoBoard);
    playerTwoBoard.placeShip(3, "horizontal", [0, 0]);
    player.makeMove([0, 0]);
    player.makeMove([0, 1]);
    player.makeMove([0, 2]);
    expect(playerTwoBoard.allShips[0].isSunk()).toBe(true);
  });

  test("Player correctly sinks all ships", () => {
    const player = Player("Human", playerOneBoard, playerTwoBoard);
    playerTwoBoard.placeShip(3, "horizontal", [0, 0]);
    playerTwoBoard.placeShip(2, "vertical", [5, 0]);
    player.makeMove([0, 0]);
    player.makeMove([0, 1]);
    player.makeMove([0, 2]);
    player.makeMove([5, 0]);
    player.makeMove([4, 0]);
    expect(playerTwoBoard.shipsSunk()).toBe(true);
  });

  test("Player wins", () => {
    const player = Player("Human", playerOneBoard, playerTwoBoard);
    playerTwoBoard.placeShip(3, "horizontal", [0, 0]);
    player.makeMove([0, 0]);
    player.makeMove([0, 1]);
    player.makeMove([0, 2]);
    player.checkWin();
    expect(player.getWins()).toBe(1);
  });
});
