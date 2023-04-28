export default function GraphicsController() {
  // ui containers
  const playerOneBoardUI = document.querySelector("#player-one-board");
  const playerTwoBoardUI = document.querySelector("#player-two-board");
  const newGamePoppup = document.querySelector("#new-game-poppup");
  const rotateBtn = document.querySelector("#rotate");
  rotateBtn.value = "horizontal";

  const buildBoardsUI = (playerOneBoard, playerTwoBoard) => {
    for (let i = 0; i < playerOneBoard.board.length; i++) {
      const squareID = playerOneBoard.board[i].id;
      const newSquare = document.createElement("div");
      newSquare.classList.add("board-square");
      newSquare.dataset.index = squareID;
      playerOneBoardUI.appendChild(newSquare);
      playerOneBoardUI.classList.add("visibility");
    }

    for (let i = 0; i < playerTwoBoard.board.length; i++) {
      const squareID = playerTwoBoard.board[i].id;
      const newSquare = document.createElement("div");
      newSquare.classList.add("board-square");
      newSquare.dataset.index = squareID;
      playerTwoBoardUI.appendChild(newSquare);
      playerTwoBoardUI.classList.add("visibility");
    }
  };

  const displayNewGamePoppup = (playerOneBoard) => {
    newGamePoppup.appendChild(playerOneBoardUI);
    playerOneBoardUI.classList.remove("visibility");
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

  const displayWinner = () => { };

  const rotateBtnEventListener = () => {
    rotateBtn.addEventListener("click", () => {
      rotateBtn.value =
        rotateBtn.value === "horizontal" ? "vertical" : "horizontal";
    });
  };

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

  // helper to check if squares are on the same row
  const isInSameRow = (index1, index2, rowSize) =>
    Math.floor(index1 / rowSize) === Math.floor(index2 / rowSize);

  // helper to check if squares are on the same col
  const isInSameCol = (index1, index2, colSize) =>
    index1 % colSize === index2 % colSize;

  const placeShips = () => {
    const carrierLength = 5;
    const battleshipLength = 4;
    const destroyerLength = 3;
    const submarineLength = 3;
    const patrolBoatLength = 2;

    const gridSquares = playerOneBoardUI.children;

    // mouse enter
    // eslint-disable-next-line no-restricted-syntax
    for (const gridSquare of gridSquares) {
      gridSquare.addEventListener("mouseenter", (e) => {
        const index = Number(e.target.dataset.index);
        for (let i = 0; i < carrierLength; i += 1) {
          const hoverIndex =
            rotateBtn.value === "horizontal" ? index + i : index + i * 10;
          if (
            (rotateBtn.value === "horizontal" &&
              isInSameRow(index, hoverIndex, 10)) ||
            (rotateBtn.value === "vertical" &&
              isInSameCol(index, hoverIndex, 10) &&
              hoverIndex < 100)
          ) {
            gridSquares[hoverIndex].classList.add("ship-selection");
          }
        }
      });

      // mouse leave
      gridSquare.addEventListener("mouseleave", (e) => {
        const index = Number(e.target.dataset.index);
        for (let i = 0; i < carrierLength; i += 1) {
          const hoverIndex =
            rotateBtn.value === "horizontal" ? index + i : index + i * 10;
          if (
            (rotateBtn.value === "horizontal" &&
              isInSameRow(index, hoverIndex, 10)) ||
            (rotateBtn.value === "vertical" &&
              isInSameCol(index, hoverIndex, 10) &&
              hoverIndex < 100)
          ) {
            gridSquares[hoverIndex].classList.remove("ship-selection");
          }
        }
      });
    }
  };

  // event listeners
  rotateBtnEventListener();

  return {
    displayNewGamePoppup,
    buildBoardsUI,
    displayShips,
    renderMoves,
    placeShips,
  };
}
