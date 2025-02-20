import { Ship, GameBoard, Player } from "../classes.js";

describe("Ship public properties and methods", () => {
  const testShip = new Ship(1);

  it("return sunk property false", () => {
    expect(testShip.sunk).toBe(false);
  });

  it("hit method changes sunk property true if ship is sunk", () => {
    testShip.hit();
    expect(testShip.sunk).toBe(true);
  });
});

describe("Gameboard public properties and methods", () => {
  const testBoard = new GameBoard();
  const testShip = new Ship(4);

  it("places ship of size 4 horizontally at F5 and passes check at F7", () => {
    testBoard.place(testShip, [4, 5], false);
    expect(testBoard.board[4][7].occupant).toBe(testShip);
  });

  it("receives attack successfully", () => {
    testBoard.receiveAttack([4, 5]);
    expect(testShip.hits).toBe(1);
  });

  it("misses attack successfully", () => {
    testBoard.receiveAttack([1, 2]);
    expect(testBoard.board[1][2].missed).toBe(true);
  });

  it("sinks ship successfully", () => {
    testBoard.receiveAttack([4, 5]);
    testBoard.receiveAttack([4, 5]);
    testBoard.receiveAttack([4, 5]);
    expect(testShip.sunk).toBe(true);
  });

  it("returns no ship remaining on board", () => {
    expect(testBoard.hasShips()).toBe(false);
  });
});

describe("Player public properties and methods", () => {
  const player = new Player(false, "Jon");

  it("create player board correctly", () => {
    expect(player.area.board[0][0].occupied).toBe(false);
  });

  it("places new ship on player board", () => {
    player.area.place(new Ship(2), [0, 0], false);
    expect(player.area.board[0][2].occupied).toBe(false);
  });
});
