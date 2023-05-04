export default function Player(ownBoard, enemyBoard) {
  const moves = new Set();
  let wins = 0;

  const getWins = () => wins;
  // eslint-disable-next-line no-plusplus
  const incrementWins = () => wins++;

  const makeMove = (coords) => {
    const targetedSquare = enemyBoard.getSquare(coords);
    if (!moves.has(targetedSquare)) {
      enemyBoard.receiveAttack(coords);
      moves.add(targetedSquare);
    }
    return targetedSquare.filled;
  };

  const makeMoveAI = () => {
    let foundMove = false;
    let targetedSquare;
    while (!foundMove && moves.size < 100) {
      const randomNum = Math.floor(Math.random() * 100);
      const randomSquare = enemyBoard.getSquareGivenID(randomNum);

      if (!moves.has(randomSquare)) {
        enemyBoard.receiveAttack(enemyBoard.getCoords(randomNum));
        moves.add(randomSquare);
        foundMove = true;
        targetedSquare = randomSquare;
      }
    }
    return targetedSquare;
  };

  const checkWin = () => {
    if (enemyBoard.shipsSunk()) {
      incrementWins();
      return true;
    }
    return false;
  };

  return { makeMove, makeMoveAI, moves, getWins, checkWin };
}
