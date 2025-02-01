import { Ship, GameBoard } from "../index.js";

describe("Ship public properties and methods", () => {
  const testShip = new Ship(1);

  test("return sunk property false", () => {
    expect(testShip.sunk).toBeFalsy();
  });

  test("hit method changes sunk property if ship is sunk", () => {
    testShip.hit();
    expect(testShip.sunk).toBeTruthy();
  });
});

describe("Gameboard public properties and methods", () => {
  const testBoard = new GameBoard();
  const testShip = new Ship(1);
  testBoard.board

  // test("place ship at A5", () => {
  //   expect(testBoard.place(testShip, ['A', 5], true))
  // });
});
