export default function GraphicsController() {
  // ui containers
  const playerOneBoardUI = document.querySelector("#player-one-board");
  const playerTwoBoardUI = document.querySelector("#player-two-board");

  const displayBoards = (playerOneBoard, playerTwoBoard) => {
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

  const clearBoards = () => {
    playerOneBoardUI.childNodes.forEach((node) => {
      node.classList.add("board-square");
      node.classList.remove("ship");
      node.classList.remove("hit");
      node.classList.remove("miss");
    });

    playerTwoBoardUI.childNodes.forEach((node) => {
      node.classList.add("board-square");
      node.classList.remove("ship");
      node.classList.remove("hit");
      node.classList.remove("miss");
    });
  };

  const displayWinner = () => {};

  // TODO - for the real game we just don't render playertwo board...
  const displayShips = (playerOneBoard, playerTwoBoard) => {
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

  const renderMoves = (playerOne, playerTwo, playerTwoBoard) => {
    playerTwoBoardUI.childNodes.forEach((square) => {
      square.addEventListener("click", () => {
        const squareCoords = playerTwoBoard.getCoords(square.dataset.index);
        const attack = playerOne.makeMove(squareCoords);
        if (attack === true) {
          square.classList.add("hit");
        } else if (attack === false) {
          square.classList.add("miss");
        }

        // check if player won on last move
        if (playerOne.checkWin()) {
          playerTwoBoardUI.classList.toggle("game-end");
          clearBoards();
          return;
        }

        // player has moved so we call makeMove for the AI
        const computerMove = playerTwo.makeMoveAI();
        playerOneBoardUI.childNodes.forEach((node) => {
          if (Number(node.dataset.index) === Number(computerMove.id)) {
            if (computerMove.filled) node.classList.add("hit");
            else if (!computerMove.filled) node.classList.add("miss");
          }
        });

        // check if computer won on last move
        if (playerTwo.checkWin()) {
          playerTwoBoardUI.classList.toggle("game-end");
          clearBoards();
        }
      });
    });
  };

  return {
    displayBoards,
    displayShips,
    renderMoves,
  };
}
