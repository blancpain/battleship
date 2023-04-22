import Gameboard from "./gameboard";

export default function Player(type, ownBoard, enemyBoard) {
  const moves = new Set();
  let wins = 0;

  const getType = () => type;
  const getWins = () => wins;
  // eslint-disable-next-line no-plusplus
  const incrementWins = () => wins++;

  const makeMove = (coords) => {
    if (type === "AI") {
      const randomX = Math.floor(Math.random() * 9);
      const randomY = Math.floor(Math.random() * 9);
      const randomCoords = [randomX, randomY];
      const randomSquare = enemyBoard.getSquare(randomCoords);
      if (!moves.has(randomSquare)) {
        enemyBoard.receiveAttack(randomCoords);
        moves.add(randomSquare);
        return randomSquare;
      }
      return null;
    }

    // if we are given coords it means it's a human player
    const targetedSquare = enemyBoard.getSquare(coords);
    if (!moves.has(targetedSquare)) {
      enemyBoard.receiveAttack(coords);
      moves.add(targetedSquare);
    }
    return null;
  };

  const checkWin = () => {
    if (enemyBoard.shipsSunk()) {
      incrementWins();
      return true;
    }
    return false;
  };

  // TODO -> placeShip(coords) => ownBoard.placeship()...

  return { makeMove, moves, getWins, getType, checkWin };
}
