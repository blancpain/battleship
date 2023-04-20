/* eslint-disable no-plusplus */
// eslint-disable-next-line import/extensions
import Ship from "./ship.js";

function Square(coords, filled) {
  if (typeof Square.id === "undefined") {
    Square.id = 0;
  } else {
    Square.id++;
  }
  const { id } = Square;
  return { id, coords, filled };
}

export default function Gameboard() {
  const allShips = [];

  const buildBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.push(Square([i, j], false));
      }
    }
    return board;
  };

  const board = buildBoard();

  // helper function to determine if square is currently filled
  const isSquareFilled = (coords) => {
    const correspondingSquare = board.find(
      (sq) => sq.coords.toString() === coords.toString()
    );
    return correspondingSquare.filled;
  };

  // helper function to fill square
  const fillSquare = (coords) => {
    const correspondingSquare = board.find(
      (sq) => sq.coords.toString() === coords.toString()
    );
    correspondingSquare.filled = true;
  };

  const placeShip = (length, orientation, coords) => {
    const shipLocation = [];
    let isPlacementLegal = true;

    // if ship is vertical Y coord stays the same and we only increment X
    if (orientation === "vertical") {
      let coordX = coords[0];
      for (let i = 0; i < length; i++) {
        // check if out of bounds
        if (coordX < 0 || coordX > 9) return null;

        const coordinates = [coordX, coords[1]];
        shipLocation.push(coordinates);
        coordX -= 1;
      }
      // if ship is horizontal X coord stays the same and we only increment Y
    } else if (orientation === "horizontal") {
      let coordY = coords[1];
      for (let i = 0; i < length; i++) {
        // check if out of bounds
        if (coordY < 0 || coordY > 9) return null;

        const coordinates = [coords[0], coordY];
        shipLocation.push(coordinates);
        coordY += 1;
      }
    }

    // check potential overlaps
    shipLocation.forEach((coordinate) => {
      if (isSquareFilled(coordinate)) isPlacementLegal = false;
    });
    if (!isPlacementLegal) return null;

    // if no overlaps we create the ship and fill the squares
    shipLocation.forEach((coordinate) => fillSquare(coordinate));
    const newShip = Ship(length, shipLocation);
    allShips.push(newShip);
  };

  const receiveAttack = (coords) => { };

  const shipsSunk = () => allShips.every((ship) => ship.isSunk());

  return { placeShip, board, receiveAttack, shipsSunk, allShips };
}

// testing
const nb = Gameboard();

nb.placeShip(4, "horizontal", [0, 0]);
console.log(nb.allShips[0].getHits());
// nb.allShips.forEach((ship) =>
//   ship.getLocation().forEach((location) => console.log(location))
// );
// nb.placeShip(4, "horizontal", [0, 0]);

// nb.allShips.forEach((ship) => console.log(ship.getLocation()));
