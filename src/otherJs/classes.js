class Ship {
  #length;
  #hits;
  constructor(length, name) {
    this.#length = length;
    this.#hits = 0;
    this.sunk = false;
    this.name = name;
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
    this.selected = false;
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
    let arr = new Array(boardSize);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(boardSize);
      for (let j = 0; j < arr.length; j++) {
        arr[i][j] = new Space();
      }
    }

    return arr;
  }
  place(ship, coord, isVertical, shipName) {
    if (
      this.hasRoom(ship, coord, isVertical) &&
      !this.isOccupied(ship, coord, isVertical)
    ) {
      if (this.doesShipExistOnBoard(shipName)) {
        this.removeShip(shipName);
      }

      for (let i = 0; i < ship.length; i++) {
        if (isVertical) {
          this.#board[coord[0] + i][coord[1]].occupied = true;
          this.#board[coord[0] + i][coord[1]].occupant = ship;
        } else {
          this.#board[coord[0]][coord[1] + i].occupied = true;
          this.#board[coord[0]][coord[1] + i].occupant = ship;
        }
      }

      this.#shipCount++;
    }

    return false;
  }
  doesShipExistOnBoard(shipName) {
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (this.#board[row][col].occupied) {
          if (this.#board[row][col].occupant.name === shipName) {
            return true;
          }
        }
      }
    }
    
    return false;
  }
  removeShip(shipName) {
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (this.#board[row][col].occupied) {
          if (this.#board[row][col].occupant.name === shipName) {
            this.#board[row][col].occupied = false;
            this.#board[row][col].occupant = null;
          }
        }
      }
    }
  }
  hasRoom(ship, coord, isVertical) {
    if (isVertical) {
      if (coord[0] + ship.length > 10) {
        return false;
      }

      return true;
    }

    if (coord[1] + ship.length > 10) {
      return false;
    }

    return true;
  }
  isOccupied(ship, coord, isVertical, shipName) {
    for (let i = 0; i < ship.length; i++) {
      if (isVertical) {
        if (
          this.#board[coord[0]][coord[1] + i].occupied &&
          this.#board[coord[0]][coord[1] + i].occupant.name != shipName
        ) {
          return true;
        }
        
        return false
      }

      if (
        this.#board[coord[0]][coord[1] + i].occupied &&
        this.#board[coord[0]][coord[1] + i].occupant.name != shipName
      ) {
        return true;
      }
    }

    return false;
  }
  receiveAttack(coord) {
    if (this.#board[coord[0]][coord[1]].occupied) {
      const ship = this.#board[coord[0]][coord[1]].occupant;
      ship.hit();
      this.#board[coord[0]][coord[1]].missed = false;

      if (ship.sunk) {
        this.#sunkCount++;
      }
    } else {
      this.#board[coord[0]][coord[1]].missed = true;
    }

    this.#board[coord[0]][coord[1]].shot = true;
  }
  hasShips() {
    if (this.#shipCount === this.#sunkCount) {
      return false;
    }

    return true;
  }
}

class Player {
  #isComputer;
  #name;
  #area;
  #number;
  constructor(number, isComputer, name = `Computer ${number}`) {
    this.#number = number;
    this.#isComputer = isComputer;
    this.#name = name;
    this.#area = new GameBoard();
    this.shootable = false;
    this.didAction = false;
    this.hasHit = false;
    this.lastHitCoord = [];
  }

  get number() {
    return this.#number;
  }

  get name() {
    return this.#name;
  }

  get area() {
    return this.#area;
  }

  get isComputer() {
    return this.#isComputer;
  }

  reset() {
    this.#area = new GameBoard();
    this.shootable = false;
    this.didAction = false;
    this.hasHit = false;
    this.lastHitCoord = [];
  }
}

export { Ship, GameBoard, Player };
