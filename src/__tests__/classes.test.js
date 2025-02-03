import { Ship, GameBoard } from "../classes.js";

describe("Ship public properties and methods", () => {
  const testShip = new Ship(1);

  test("return sunk property false", () => {
    expect(testShip.sunk).toBe(false);
  });

  test("hit method changes sunk property true if ship is sunk", () => {
    testShip.hit();
    expect(testShip.sunk).toBe(true);
  });
});

describe("Gameboard public properties and methods", () => {
  const testBoard = new GameBoard();
  const testShip = new Ship(4);

  test("places ship of size 4 horizontally at F5", () => {
    expect(testBoard.place(testShip, [4, 5], false)).toBe(true);
  });

  test("receives attack successfully", () => {
    testBoard.receiveAttack([4, 5]);
    expect(testShip.hits).toBe(1);
  });

  test("misses attack successfully", () => {
    testBoard.receiveAttack([1, 2]);
    expect(testBoard.board[1][2].missed).toBe(true);
  });

  test("sinks ship successfully", () => {
    testBoard.receiveAttack([4, 5]);
    testBoard.receiveAttack([4, 5]);
    testBoard.receiveAttack([4, 5]);
    expect(testShip.sunk).toBe(true);
  });

  test("returns no ship remaining on board", () => {
    expect(testBoard.hasShips()).toBe(false);
  });
});
