import "./style.css";

class Ship {
  #length;
  #hits;
  constructor(length) {
    this.#length = length;
    this.#hits = 0;
    this.sunk = false;
  }

  get length() {
    return this.#length;
  }

  hit() {
    if (!this.sunk) {
      this.#hits++;
      this.#isSunk();
    }
  }
  #isSunk() {
    if (this.#hits === this.#length) {
      this.sunk = true;
    }
  }
}

class Space {
  constructor() {
    this.occupant = null;
    this.occupied = false;
  }
}

class GameBoard {
  #board
  constructor() {
    this.#board = this.createBoard(10);
  }
  
  get board() {
    console.table(this.#board);
  }

  createBoard(boardSize) {
    const arr = new Array(boardSize);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(boardSize).fill(new Space());
    }

    return arr;
  }

  place(ship, coord, isVertical) {
    if (isVertical) {
      if ((coord[0] + ship.length) > 10) {
        return false;
      }
      return true
    }
    
    if (coord[1] + ship.length > 10) {
      return false;
      
    }
    return true;
  }
}

export { Ship, GameBoard };
