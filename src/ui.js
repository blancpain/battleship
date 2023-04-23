import { initialSetup } from "./game";

export default function GraphicsController() {
  // ui containers
  const boardContainer = document.querySelector(".gameboard-container");
  const playerOneBoardUI = document.querySelector("#player-one-board");
  const playerTwoBoardUI = document.querySelector("#player-two-board");

  const { playerOneBoard, playerTwoBoard, playerOne, playerTwo } =
    initialSetup();

  const displayBoards = () => {
    for (let i = 0; i < playerOneBoard.board.length; i++) {
      const squareID = playerOneBoard.board[i].id;
      const newSquare = document.createElement("div");
      newSquare.classList.add("board-square");
      newSquare.dataset.index = squareID;
      playerOneBoardUI.appendChild(newSquare);
    }

    for (let i = 0; i < playerTwoBoard.board.length; i++) {
      const squareID = playerTwoBoard.board[i].id;
      const newSquare = document.createElement("div");
      newSquare.classList.add("board-square");
      newSquare.dataset.index = squareID;
      playerTwoBoardUI.appendChild(newSquare);
    }
  };

  const displayShips = () => {
    const playerOneShipIDs = playerOneBoard.getShipLocations();
    const playerTwoShipIDs = playerTwoBoard.getShipLocations();

    playerOneBoardUI.childNodes.forEach((node) => {
      playerOneShipIDs.forEach((id) => {
        if (Number(node.dataset.index) === Number(id)) {
          node.classList.add("ship");
        }
      });
    });

    playerTwoBoardUI.childNodes.forEach((node) => {
      playerTwoShipIDs.forEach((id) => {
        if (Number(node.dataset.index) === Number(id)) {
          node.classList.add("ship");
        }
      });
    });
  };

  return { displayBoards, displayShips };
}
