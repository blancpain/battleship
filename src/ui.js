import Game from "./game";

export default function GraphicsController() {
  const game = Game();
  // ui containers
  const playerOneBoardUI = document.querySelector("#player-one-board");
  const playerTwoBoardUI = document.querySelector("#player-two-board");
  const newGamePoppup = document.querySelector("#new-game-poppup");
  const boardsContainer = document.querySelector(".gameboard-container");
  const rotateBtn = document.querySelector("#rotate");
  rotateBtn.value = "horizontal";
  const endGamePoppup = document.querySelector(".game-over-poppup");
  const endGameBgcFilter = document.querySelector("#filter");
  const playAgainBtn = document.querySelector("#play-again");

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

  const displayNewGamePoppup = () => {
    boardsContainer.removeChild(playerOneBoardUI);
    boardsContainer.removeChild(playerTwoBoardUI);
    newGamePoppup.appendChild(playerOneBoardUI);
    playerOneBoardUI.classList.remove("visibility");
  };

  const resetGame = () => {
    while (playerOneBoardUI.hasChildNodes()) {
      playerOneBoardUI.removeChild(playerOneBoardUI.lastChild);
    }
    while (playerTwoBoardUI.hasChildNodes()) {
      playerTwoBoardUI.removeChild(playerTwoBoardUI.lastChild);
    }
    newGamePoppup.classList.remove("visibility");
    playerTwoBoardUI.classList.toggle("game-end");
    playerOneBoardUI.style.pointerEvents = "all";
    rotateBtn.value = "horizontal";
  };

  const handleRotateBtnClick = () => {
    rotateBtn.value =
      rotateBtn.value === "horizontal" ? "vertical" : "horizontal";
  };

  const handleEndGame = () => {
    playerTwoBoardUI.classList.toggle("game-end");
    resetGame();
    game.startGame();
  };

  const renderMoves = (playerOne, playerTwo, playerTwoBoard) => {
    playerTwoBoardUI.childNodes.forEach((square) => {
      square.addEventListener("click", () => {
        const squareCoords = playerTwoBoard.getCoords(square.dataset.index);
        const isHit = playerOne.makeMove(squareCoords);
        if (isHit === true) {
          square.classList.add("hit");
        } else if (isHit === false) {
          square.classList.add("miss");
        }

        // check if player won on last move
        if (playerOne.checkWin()) {
          endGameBgcFilter.classList.toggle("filter-opened");
          endGamePoppup.classList.add("open-end-game-poppup");
          playAgainBtn.addEventListener("click", handleEndGame);
          // playerTwoBoardUI.classList.toggle("game-end");
          // resetGame();
          // game.startGame();
          return null;
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
          endGameBgcFilter.classList.toggle("filter-opened");
          endGamePoppup.classList.add("open-end-game-poppup");
          // playerTwoBoardUI.classList.toggle("game-end");
          // resetGame();
          // game.startGame();
          playAgainBtn.addEventListener("click", handleEndGame);
          return null;
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

  // helper to update ship placement text prompt
  const updatePrompt = (index) => {
    if (index === 0) return "Carrier";
    if (index === 1) return "Battleship";
    if (index === 2) return "Destroyer";
    if (index === 3) return "Submarine";
    if (index === 4) return "Patrol Boat";
  };

  const placeShips = (board) => {
    // add rotate btn event listener
    rotateBtn.addEventListener("click", handleRotateBtnClick);

    const shipLengths = [5, 4, 3, 3, 2];
    let currentShipIndex = 0;
    const gridSquares = playerOneBoardUI.children;
    const textPrompt = document.querySelector("#place-ship");
    textPrompt.textContent = updatePrompt(currentShipIndex);

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
        if (currentShipIndex === shipLengths.length - 1) {
          // remove rotate btn event listener so that it
          // doesn't persist accross games
          rotateBtn.removeEventListener("click", handleRotateBtnClick);

          // update UI
          newGamePoppup.removeChild(playerOneBoardUI);
          newGamePoppup.classList.add("visibility");
          boardsContainer.appendChild(playerOneBoardUI);
          boardsContainer.appendChild(playerTwoBoardUI);
          playerOneBoardUI.classList.remove("visibility");
          playerTwoBoardUI.classList.remove("visibility");
          playerOneBoardUI.style.pointerEvents = "none";
          return null;
        }
        currentShipIndex += 1;
        textPrompt.textContent = updatePrompt(currentShipIndex);
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

  return {
    displayNewGamePoppup,
    buildBoardsUI,
    renderMoves,
    placeShips,
  };
}
