import { Ship, GameBoard } from "../index.js";

describe("Ship public properties and methods", () => {
  const testShip = new Ship(1);

  test("return sunk property false", () => {
    expect(testShip.sunk).toBeFalsy();
  });

  test("hit method changes sunk property true if ship is sunk", () => {
    testShip.hit();
    expect(testShip.sunk).toBe(true);
  });
});

describe("Gameboard public properties and methods", () => {
  const testBoard = new GameBoard();
  const testShip = new Ship(4);
  
  test("place ship of size 4 horizontally at F5", () => {
    expect(testBoard.place(testShip, [4, 5], false)).toBe(true);
  });

  test("receive attack successfully", () => {
    testBoard.receiveAttack([4, 5]);
    expect(testShip.hits).toBe(1);
  });

    test("missed attack successfully", () => {
      testBoard.receiveAttack([1, 2]);
      expect(testBoard.board[1][2].missed).toBe(true);
    });


  test("sink ship successfully", () => {
    testBoard.receiveAttack([4, 5]);
    testBoard.receiveAttack([4, 5]);
    testBoard.receiveAttack([4, 5]);
    expect(testShip.sunk).toBe(true);
  });
});
