import "./style.css";
import { Player, Ship } from "./classes.js";

function updateBoard(player) {
  let boardDiv;
  if (player.number === 1) {
    boardDiv = document.getElementById("board-1");
  } else {
    boardDiv = document.getElementById("board-2");
  }

  const board = player.area.board;
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const space = board[row][col];
      if (
        space.occupied &&
        !spaceHasClass(boardDiv, row, col, "ship" && !player.shootable)
      ) {
        boardDiv.children[row].children[col].classList.add("ship");
      }

      if (player.shootable) {
        boardDiv.children[row].children[col].classList.remove("ship");
      }

      if (
        space.shot &&
        !space.missed &&
        !spaceHasClass(boardDiv, row, col, "hit")
      ) {
        boardDiv.children[row].children[col].classList.add("hit");
      }

      if (space.missed && !spaceHasClass(boardDiv, row, col, "miss")) {
        boardDiv.children[row].children[col].classList.add("miss");
      }
    }
  }
}

function spaceHasClass(boardDiv, row, col, className) {
  const rowsDiv = boardDiv.children;
  if (rowsDiv[row].children[col].classList.contains(`${className}`)) {
    return true;
  }

  return false;
}

function findOtherPlayer(currentPlayer) {
  let otherPlayer = player1;
  if (currentPlayer.number === 1) {
    otherPlayer = player2;
  }

  return otherPlayer;
}

function startTurn(player) {
  const announcement = document.getElementById("announcement");
  announcement.textContent = `${player.name}'s Turn`;

  const targetPlayer = findOtherPlayer(player);
  player.shootable = false;
    targetPlayer.shootable = true;
    
    updateBoard(player);
    updateBoard(targetPlayer);

  const currentPlayerOverlay = document.getElementById(
    `overlay-${player.number}`
  );
  const targetPlayerOverlay = document.getElementById(
    `overlay-${targetPlayer.number}`
  );
  currentPlayerOverlay.style.visibility = "visible";
  targetPlayerOverlay.style.visibility = "hidden";
}

function endGame(winner, loser) {
  const announcement = document.getElementById("announcement");
  announcement.textContent = `${winner.name} Wins!`;

  const winnerOverlay = document.getElementById(`overlay-${winner.number}`);
  winnerOverlay.style.visibility = "hidden";

  updateBoard(winner);
  loser.shootable = false;

  const button = document.getElementById("turn-button");
  button.textContent = "Play Again";
}

function shoot(targetPlayer, coord) {
  const currentPlayer = findOtherPlayer(targetPlayer);
  if (!targetPlayer.area.board[coord[0]][coord[1]].shot) {
    targetPlayer.area.receiveAttack(coord);
    updateBoard(targetPlayer);

    if (!targetPlayer.area.hasShips()) {
      endGame(currentPlayer, targetPlayer);
      return;
    }

    if (!targetPlayer.area.board[coord[0]][coord[1]].missed) {
      startTurn(currentPlayer);
    } else {
      startTurn(targetPlayer);
    }
  } else {
    startTurn(currentPlayer);
  }
}

function addAllSpaceClickEvents() {
  const board1 = document.getElementById("board-1");
  const board2 = document.getElementById("board-2");

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      addSpaceClick(player1, board1.children[row].children[col], [row, col]);
      addSpaceClick(player2, board2.children[row].children[col], [row, col]);
    }
  }
}

function addSpaceClick(player, space, coord) {
  space.addEventListener("click", (e) => {
    if (player.shootable) {
      shoot(player, coord);
    }
  });
}

//initial setup
const player1 = new Player(1, false, "Player 1");
const player2 = new Player(2, false, "Player 2");
const player1Title = document.getElementById("player-1");
const player2Title = document.getElementById("player-2");
player1Title.textContent = `${player1.name}`;
player2Title.textContent = `${player2.name}`;
addAllSpaceClickEvents();

//place turns
player1.area.place(new Ship(4), [0, 0], false);
player2.area.place(new Ship(4), [4, 2], true);

startTurn(player1);
