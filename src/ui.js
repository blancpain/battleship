export default function GraphicsController() {
  // ui containers
  const playerOneBoardUI = document.querySelector("#player-one-board");
  const playerTwoBoardUI = document.querySelector("#player-two-board");
  const newGamePoppup = document.querySelector("#new-game-poppup");
  const rotateBtn = document.querySelector("#rotate");
  rotateBtn.value = "horizontal";

  const buildBoardsUI = (playerOneBoard, playerTwoBoard) => {
    for (let i = 0; i < playerOneBoard.board.length; i += 1) {
      const squareID = playerOneBoard.board[i].id;
      const newSquare = document.createElement("div");
      newSquare.classList.add("board-square");
      newSquare.dataset.index = squareID;
      playerOneBoardUI.appendChild(newSquare);
      playerOneBoardUI.classList.add("visibility");
    }

    for (let i = 0; i < playerTwoBoard.board.length; i += 1) {
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

  // helper to check if ship can be placed in hovered area
  const canPlaceShip = (index, length, orientation, gridSquares) => {
    for (let i = 0; i < length; i += 1) {
      const hoverIndex =
        orientation === "horizontal" ? index + i : index + i * 10;
      if (
        hoverIndex < 0 ||
        hoverIndex >= 100 ||
        gridSquares[hoverIndex].classList.contains("ship") ||
        (orientation === "horizontal" && !isInSameRow(index, hoverIndex, 10)) ||
        (orientation === "vertical" && !isInSameCol(index, hoverIndex, 10))
      ) {
        return false;
      }
    }
    return true;
  };

  const placeShips = (board) => {
    const shipLengths = [5, 4, 3, 3, 2];
    let currentShipIndex = 0;
    const gridSquares = playerOneBoardUI.children;

    // mouse enter handler
    const handleMouseEnter = () => (e) => {
      const index = Number(e.target.dataset.index);
      for (let i = 0; i < shipLengths[currentShipIndex]; i += 1) {
        const hoverIndex =
          rotateBtn.value === "horizontal" ? index + i : index + i * 10;
        if (
          hoverIndex >= 0 &&
          hoverIndex < 100 &&
          !gridSquares[hoverIndex].classList.contains("ship")
        ) {
          if (
            (rotateBtn.value === "horizontal" &&
              isInSameRow(index, hoverIndex, 10)) ||
            (rotateBtn.value === "vertical" &&
              isInSameCol(index, hoverIndex, 10))
          ) {
            gridSquares[hoverIndex].classList.add("ship-selection");
          }
        }
      }
    };

    // mouse leave handler
    const handleMouseLeave = () => (e) => {
      const index = Number(e.target.dataset.index);
      for (let i = 0; i < shipLengths[currentShipIndex]; i += 1) {
        const hoverIndex =
          rotateBtn.value === "horizontal" ? index + i : index + i * 10;
        if (
          hoverIndex >= 0 &&
          hoverIndex < 100 &&
          !gridSquares[hoverIndex].classList.contains("ship")
        ) {
          if (
            (rotateBtn.value === "horizontal" &&
              isInSameRow(index, hoverIndex, 10)) ||
            (rotateBtn.value === "vertical" &&
              isInSameCol(index, hoverIndex, 10))
          ) {
            gridSquares[hoverIndex].classList.remove("ship-selection");
          }
        }
      }
    };

    // click event handler
    const handleClicks = () => (e) => {
      const index = Number(e.target.dataset.index);
      const coords = board.getCoords(index);
      const orientation = rotateBtn.value;
      const shipLength = shipLengths[currentShipIndex];
      if (canPlaceShip(index, shipLength, orientation, gridSquares)) {
        if (currentShipIndex >= shipLengths.length) {
          // all ships have been placed we remove the event listener
          // or we just return null?
          // or actually we terminate this and we go on with the game...
          return null;
        }
        board.placeShip(shipLength, orientation, coords);
        for (let i = 0; i < shipLength; i += 1) {
          const hoverIndex =
            orientation === "horizontal" ? index + i : index + i * 10;
          if (
            hoverIndex >= 0 &&
            hoverIndex < 100 &&
            !gridSquares[hoverIndex].classList.contains("ship")
          ) {
            if (
              (orientation === "horizontal" &&
                isInSameRow(index, hoverIndex, 10)) ||
              (orientation === "vertical" && isInSameCol(index, hoverIndex, 10))
            ) {
              gridSquares[hoverIndex].classList.add("ship");
              gridSquares[hoverIndex].classList.remove("ship-selection");
            }
          }
        }
        currentShipIndex += 1;
      }
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const gridSquare of gridSquares) {
      // listeners
      gridSquare.addEventListener(
        "mouseenter",
        handleMouseEnter(currentShipIndex)
      );
      gridSquare.addEventListener(
        "mouseleave",
        handleMouseLeave(currentShipIndex)
      );
      gridSquare.addEventListener("click", handleClicks(currentShipIndex));
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
