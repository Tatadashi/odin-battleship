import "./style.css";
import { Player, Ship } from "./classes.js";

function clearBoard(player) {
  const boardDiv = document.getElementById(`board-${player.number}`);
  const board = player.area.board;

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      board[row][col].selected = false;
      boardDiv.children[row].children[col].classList.remove("selected");
      boardDiv.children[row].children[col].classList.remove("ship");
    }
  }
}

function updateBoard(player) {
  const boardDiv = document.getElementById(`board-${player.number}`);
  const board = player.area.board;
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const space = board[row][col];

      if (space.selected) {
        boardDiv.children[row].children[col].classList.add("selected");
      }

      if (
        space.occupied &&
        !spaceHasClass(boardDiv, row, col, "ship") &&
        !player.shootable
      ) {
        boardDiv.children[row].children[col].classList.add("ship");
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
  
  const turnButton = document.getElementById("turn-button");
  turnButton.style.backgroundColor = "lightgray";
  
  const targetPlayer = findOtherPlayer(player);
  player.shootable = false;
  targetPlayer.shootable = true;
  player.didAction = false;
  
  const currentPlayerOverlay = document.getElementById(
    `overlay-${player.number}`
  );
  const targetPlayerOverlay = document.getElementById(
    `overlay-${targetPlayer.number}`
  );
  currentPlayerOverlay.style.visibility = "visible";
  targetPlayerOverlay.style.visibility = "hidden";

  if (player.isComputer) {
    computerShoot(targetPlayer);
  }
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

function computerShoot(targetPlayer) {
  const computer = findOtherPlayer(targetPlayer);
  if (computer.hasHit || computer.lastHitCoord.length > 0) {
    computerShootAdjacent(targetPlayer, computer.lastHitCoord[computer.lastHitCoord.length - 1]);
    return;
  }

  let randomCoord = getRandomCoord();
  while (targetPlayer.area.board[randomCoord[0]][randomCoord[1]].shot) {
    randomCoord = getRandomCoord();
  }
  shoot(targetPlayer, randomCoord);
}

function getRandomCoord() {
  const randomRow = Math.floor(Math.random() * 10);
  const randomCol = Math.floor(Math.random() * 10);

  return [randomRow, randomCol];
}

function computerShootAdjacent(targetPlayer, coord) {
  if (!isOutOfBounds(coord, 'top')) {
    if (!targetPlayer.area.board[coord[0] - 1][coord[1]].shot) {
      shoot(targetPlayer, [coord[0] - 1, coord[1]]);
      return;
    }
  }

  if (!isOutOfBounds(coord, "left")) {
    if (!targetPlayer.area.board[coord[0]][coord[1] - 1].shot) {
      shoot(targetPlayer, [coord[0], coord[1] - 1]);
      return;
    }
  }

  if (!isOutOfBounds(coord, "bottom")) {
    if (!targetPlayer.area.board[coord[0] + 1][coord[1]].shot) {
      shoot(targetPlayer, [coord[0] + 1, coord[1]]);
      return;
    }
  }

  if (!isOutOfBounds(coord, "right")) {
    if (!targetPlayer.area.board[coord[0]][coord[1] + 1].shot) {
      shoot(targetPlayer, [coord[0], coord[1] + 1]);
      return;
    }
  }

  //no more adjacent spaces to shoot
  const computer = findOtherPlayer(targetPlayer);
  computer.lastHitCoord.pop();
  computerShoot(targetPlayer);
}

function isOutOfBounds(coord, direction) {
  let conclusion;
  switch (direction) {
    case 'top':
      conclusion = coord[0] - 1 < 0 || coord[0] - 1 >= 10 ;
      break;
    case 'left':
      conclusion = coord[1] - 1 < 0 || coord[1] - 1 >= 10;
      break;
    case 'bottom':
      conclusion = coord[0] + 1 < 0 || coord[0] + 1 >= 10;
      break;
    case 'right':
      conclusion = coord[1] + 1 < 0 || coord[1] + 1 >= 10;
      break;
  }

  return conclusion;
}

function shoot(targetPlayer, coord) {
  const currentPlayer = findOtherPlayer(targetPlayer);
  targetPlayer.area.receiveAttack(coord);
  updateBoard(targetPlayer);

  if (!targetPlayer.area.hasShips()) {
    endGame(currentPlayer, targetPlayer);
    return;
  }

  if (!targetPlayer.area.board[coord[0]][coord[1]].missed) {
    currentPlayer.lastHitCoord.push(coord);
    currentPlayer.hasHit = true;
    startTurn(currentPlayer);
  } else {
    currentPlayer.hasHit = false;
    startTurn(targetPlayer);
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

function addSpaceClick(targetPlayer, space, coord) {
  const currentPlayer = findOtherPlayer(targetPlayer);
  space.addEventListener("click", (e) => {
    if (
      targetPlayer.shootable &&
      !targetPlayer.area.board[coord[0]][coord[1]].shot
    ) {
      const turnButton = document.getElementById("turn-button");
      turnButton.style.backgroundColor = "bisque";

      currentPlayer.didAction = true;
      clearBoard(targetPlayer);
      targetPlayer.area.board[coord[0]][coord[1]].selected = true;
      updateBoard(targetPlayer);
    }
  });
}

function findSelected(player) {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      if (player.area.board[row][col].selected === true) {
        return [row, col];
      }
    }
  }
}

function endTurn(player) {
  const targetPlayer = findOtherPlayer(player);
  const coord = findSelected(targetPlayer);
  shoot(targetPlayer, coord);
}

function addEndTurnClick() {
  const turnButton = document.getElementById("turn-button");

  turnButton.addEventListener("click", (e) => {
    const currentPlayer = findCurrentPlayer();
    if (currentPlayer.didAction) {
      endTurn(currentPlayer);
    }
  });
}

function findCurrentPlayer() {
  if (player1.shootable) {
    return player2;
  } else {
    return player1;
  }
}

//initial setup
const player1 = new Player(1, true, "Player 1");
const player2 = new Player(2, true, "Player 2");
const player1Title = document.getElementById("player-1");
const player2Title = document.getElementById("player-2");
player1Title.textContent = `${player1.name}`;
player2Title.textContent = `${player2.name}`;
addAllSpaceClickEvents();
addEndTurnClick();

//place turns
player1.area.place(new Ship(4), [4, 2], false);
player2.area.place(new Ship(10), [0, 1], true);

startTurn(player1);