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
  get hits() {
    return this.#hits;
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
    this.shot = false;
    this.missed = null;
  }
}

class GameBoard {
  #board;
  #shipCount;
  #sunkCount;
  constructor() {
    this.#board = this.createBoard(10);
    this.#shipCount = 0;
    this.#sunkCount = 0;
  }

  get board() {
    return this.#board;
  }

  createBoard(boardSize) {
    const arr = new Array(boardSize);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(boardSize).fill(new Space());
    }

    return arr;
  }
  place(ship, coord, isVertical) {
    if (this.hasRoom(ship, coord, isVertical) && !this.isOccupied(ship, coord, isVertical)) {
      this.#board[coord[0]][coord[1]].occupied = true;
      this.#board[coord[0]][coord[1]].occupant = ship;
      this.#shipCount++;
      return this.#board[coord[0]][coord[1]].occupied;
    }
    
    return false;
  }
  hasRoom(ship, coord, isVertical) {
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
  isOccupied(ship, coord, isVertical) {
    for (let i = 0; i < ship.length; i++) {
      if (isVertical) {
        if (this.#board[coord[0]][coord[1] + i].occupied) {
          return true;
        }
      }

      if (this.#board[coord[0] + i][coord[1]].occupied) {
        return true;
      }
    }

    return false;
  }
  //check if place is shot before can receive attack
  receiveAttack(coord) {
    if (this.#board[coord[0]][coord[1]].occupied) {
      const ship = this.#board[coord[0]][coord[1]].occupant;
      ship.hit();
      
      if (ship.sunk) {
        this.#sunkCount++;
      }
    }

    this.#board[coord[0]][coord[1]].shot = true;
    this.#board[coord[0]][coord[1]].missed = true;
  }
  //check after receiving attack to check if game ends
  hasShips() {
    if (this.#shipCount === this.#sunkCount) {
      return false;
    }
    
    return true;
  }
}

export { Ship, GameBoard };
