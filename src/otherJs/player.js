import { Player } from "./classes.js";

function createPlayers(name1, name2, isComputer1, isComputer2) {
  if (name1 == "") {
    name1 = "Player 1";
  }

  if (name2 == "") {
    name2 = "Player 2";
  }

  if (isComputer1) {
    player1 = new Player(1, true);
  } else {
    player1 = new Player(1, false, `${name1}`);
  }

  if (isComputer2) {
    player2 = new Player(2, true);
  } else {
    player2 = new Player(2, false, `${name2}`);
  }
}

function findCurrentPlayer() {
  if (player1.shootable) {
    return player2;
  } else {
    return player1;
  }
}

function findOtherPlayer(currentPlayer) {
  let otherPlayer = player1;
  if (currentPlayer.number === 1) {
    otherPlayer = player2;
  }

  return otherPlayer;
}

let player1;
let player2;

export { createPlayers, findCurrentPlayer, findOtherPlayer, player1, player2 };
