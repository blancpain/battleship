import Gameboard from "./gameboard";

describe("gameboard", () => {
  const newGameboard = Gameboard();

  test("ship cannot be placed out of bounds - vertically", () => {
    expect(newGameboard.placeShip(3, "vertical", [0, 0])).toBeNull();
  });

  test("ship cannot be placed out of bounds - horizontally", () => {
    expect(newGameboard.placeShip(4, "horizontal", [5, 7])).toBeNull();
  });

  test("ships cannot overlap - horizontally", () => {
    newGameboard.placeShip(4, "horizontal", [0, 0]);
    expect(newGameboard.placeShip(4, "horizontal", [0, 1])).toBeNull();
  });

  test("ships cannot overlap - vertically", () => {
    newGameboard.placeShip(4, "vertical", [5, 0]);
    expect(newGameboard.placeShip(3, "vertical", [6, 0])).toBeNull();
  });

  test("accurate attack successfully hits ship", () => {
    newGameboard.placeShip(4, "horizontal", [0, 0]);
    newGameboard.receiveAttack([0, 0]);
    const ship = newGameboard.allShips[0];
    expect(ship.getHits()).toBe(1);
  });

  test("inaccurate attack gets recorded as missed shot", () => {
    newGameboard.placeShip(4, "horizontal", [0, 0]);
    newGameboard.receiveAttack([1, 0]);
    expect(newGameboard.missedShots).toBe(1);
  });
});
