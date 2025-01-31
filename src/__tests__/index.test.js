import { Ship } from "../index.js";

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
