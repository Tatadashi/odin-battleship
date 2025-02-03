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
  
  test("place ship of size 4 horizontally at F5", () => {
    const testShip = new Ship(4);
    expect(testBoard.place(testShip, [4, 5], false)).toBe(true);
  });

  test("recieve attack successfully", () => {
    
  })
});
