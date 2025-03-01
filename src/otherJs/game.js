import { updateBoard, clearBoard, addAllSpaceClickEvents } from "./boardDOM.js";
import {
  findOtherPlayer,
  player1,
  player2,
  findCurrentPlayer,
} from "./player.js";
import { getRandomCoord, isOutOfBounds } from "./coords.js";
import { findSelected } from "./findClass.js";
import {
  addDragAllShips,
  removeAllShips,
  resetShipPositions,
  returnShipLengthBasedOnName,
  addAllRotateClick,
} from "./dragShips.js";
import { Ship } from "./classes.js";

function startTurn(player) {
  const announcement = document.getElementById("announcement");
  announcement.textContent = `${player.name}'s Turn`;

  const turnButton = document.getElementById("turn-button");
  turnButton.style.backgroundColor = "lightgray";

  const targetPlayer = findOtherPlayer(player);
  player.shootable = false;
  targetPlayer.shootable = true;
  player.didAction = false;
  updateBoard(player);
  clearBoard(targetPlayer);
  showAndHideOverlay(player, targetPlayer);

  if (player.isComputer) {
    computerShoot(targetPlayer);
  }
}

function showAndHideOverlay(currentPlayer, targetPlayer) {
  const currentPlayerOverlay = document.getElementById(
    `overlay-${currentPlayer.number}`
  );
  const targetPlayerOverlay = document.getElementById(
    `overlay-${targetPlayer.number}`
  );
  currentPlayerOverlay.style.visibility = "visible";
  targetPlayerOverlay.style.visibility = "hidden";
}

function computerShoot(targetPlayer) {
  const computer = findOtherPlayer(targetPlayer);
  if (computer.hasHit || computer.lastHitCoord.length > 0) {
    //idk what the problem cause is, so hardcoded solution (maybe fixed accidently, but not risking it)
    if (
      computer.lastHitCoord.length > 0 == false &&
      targetPlayer.area.hasShips()
    ) {
      computer.hasHit = false;
      startTurn(targetPlayer);
      return;
    }
    computerShootAdjacent(
      targetPlayer,
      computer.lastHitCoord[computer.lastHitCoord.length - 1]
    );
    return;
  }

  let randomCoord = getRandomCoord();
  while (targetPlayer.area.board[randomCoord[0]][randomCoord[1]].shot) {
    randomCoord = getRandomCoord();
  }
  shoot(targetPlayer, randomCoord);
}

function computerShootAdjacent(targetPlayer, coord) {
  if (!isOutOfBounds(coord, "top")) {
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

function endGame(winner, loser) {
  const announcement = document.getElementById("announcement");
  announcement.textContent = `${winner.name} Wins!`;

  const winnerOverlay = document.getElementById(`overlay-${winner.number}`);
  winnerOverlay.style.visibility = "hidden";

  updateBoard(winner);
  loser.shootable = false;

  const turnButton = document.getElementById("turn-button");
  turnButton.style.display = "none";

  const turnButtonContainer = document.getElementById("turn-button-container");
  const restartButton = turnButtonContainer.querySelector(".restart-button");
  restartButton.style.display = "block";
}

function clearGame() {
  player1.reset();
  player2.reset();
  clearBoard(player1);
  clearBoard(player2);
  const boardDiv1 = document.getElementById(`board-1`);
  const boardDiv2 = document.getElementById(`board-2`);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      boardDiv1.children[row].children[col].classList.remove("miss");
      boardDiv1.children[row].children[col].classList.remove("hit");
      boardDiv2.children[row].children[col].classList.remove("miss");
      boardDiv2.children[row].children[col].classList.remove("hit");
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
    const targetPlayer = findOtherPlayer(currentPlayer);
    if (currentPlayer.didAction && targetPlayer.area.hasShips()) {
      endTurn(currentPlayer);
    }
  });
}

function startGame(firstPlayer) {
  const player1Title = document.getElementById("player-1");
  const player2Title = document.getElementById("player-2");
  player1Title.textContent = `${player1.name}`;
  player2Title.textContent = `${player2.name}`;

  const turnButton = document.getElementById("turn-button");
  turnButton.style.display = "none";
  const turnButtonContainer = document.getElementById("turn-button-container");
  const restartButton = turnButtonContainer.querySelector(".restart-button");
  restartButton.style.display = "none";

  addPlaceTurnClick();
  placeTurn(firstPlayer);
}

function placeTurn(player) {
  if (player.isComputer) {
    computerRandomPlaceAll(player);

    const otherPlayer = findOtherPlayer(player);
    if (otherPlayer.area.shipCount === 5) {
      const turnButton = document.getElementById("turn-button");
      turnButton.style.display = "block";
      const placeButton = document.getElementById("place-button");
      placeButton.style.display = "none";
      addAllSpaceClickEvents();
      addEndTurnClick();
      removeAllShips();
      startTurn(otherPlayer);
      return;
    }

    clearBoard(player);
    placeTurn(otherPlayer);
    return;
  }

  const announcement = document.getElementById("announcement");
  announcement.textContent = `${player.name}'s Turn`;

  const placeButton = document.getElementById("place-button");
  placeButton.style.backgroundColor = "lightgray";

  const boardDiv = document.getElementById(`board-${player.number}`);
  addDragAllShips(boardDiv, player);
  addAllRotateClick(boardDiv, player);

  const otherPlayer = findOtherPlayer(player);
  showAndHideOverlay(otherPlayer, player);

  //getCurrent checks which player is shootable
  player.shootable = false;
  otherPlayer.shootable = true;
}

function computerRandomPlaceAll(computer) {
  computerRandomPlace(computer, "carrier");
  computerRandomPlace(computer, "battleship");
  computerRandomPlace(computer, "destroyer");
  computerRandomPlace(computer, "submarine");
  computerRandomPlace(computer, "patrol-boat");
}

function computerRandomPlace(computer, shipName) {
  const shipLength = returnShipLengthBasedOnName(shipName);
  let randomCoord = getRandomCoord();
  const random = Math.floor(Math.random() * 2);
  const isVertical = random === 0 ? true : false;
  let hasPlaced = computer.area.place(
    new Ship(shipLength, shipName),
    randomCoord,
    isVertical,
    shipName
  );

  while (!hasPlaced) {
    randomCoord = getRandomCoord();
    hasPlaced = computer.area.place(
      new Ship(shipLength, shipName),
      randomCoord,
      isVertical,
      shipName
    );
  }
}

function addPlaceTurnClick() {
  const shipsContainer = document.getElementById("ships-container");
  const placeButton = document.getElementById("place-button");
  placeButton.addEventListener("click", (e) => {
    const currentPlayer = findCurrentPlayer();
    const otherPlayer = findOtherPlayer(currentPlayer);
    if (currentPlayer.area.shipCount === 5) {
      //otherPlayer has placed already
      if (otherPlayer.area.shipCount === 5) {
        const turnButton = document.getElementById("turn-button");
        turnButton.style.display = "block";
        placeButton.style.display = "none";
        addAllSpaceClickEvents();
        addEndTurnClick();
        removeAllShips();
        startTurn(otherPlayer);
        return;
      }

      //replace gets rid of event listener
      resetShipPositions(currentPlayer);
      shipsContainer.replaceWith(shipsContainer.cloneNode(true));
      clearBoard(currentPlayer);
      placeTurn(otherPlayer);
    }
  });
}

export { clearGame, startGame };
