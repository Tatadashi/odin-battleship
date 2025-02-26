import { spaceHasClass } from "./findClass.js";
import { findOtherPlayer, player1, player2 } from "./player.js";

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
  space.classList.add("hoverable");
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

function addDragShip(shipDiv) {
  let offsetX, offsetY;
  const move = (e) => {
    shipDiv.style.left = `${e.clientX - offsetX}px`;
    shipDiv.style.top = `${e.clientY - offsetY}px`;
    shipDiv.style.zIndex = 1;
  };

  shipDiv.addEventListener("mousedown", (e) => {
    //want offset from shipDiv and clientX, not targetNode (space) and clientX
    offsetX = e.clientX - shipDiv.offsetLeft;
    offsetY = e.clientY - shipDiv.offsetTop;
    shipDiv.style.border = "5px solid red";
    window.addEventListener("mousemove", move);
  });

  shipDiv.addEventListener("mouseup", (e) => {
    window.removeEventListener("mousemove", move);
    shipDiv.style.removeProperty("z-index");
    shipDiv.style.removeProperty("border");
  });
}

function addDragAllShips() {
  const carrier = document.getElementById("carrier");
  const battleship = document.getElementById("battleship");
  const destroyer = document.getElementById("destroyer");
  const submarine = document.getElementById("submarine");
  const patrolBoat = document.getElementById("patrol-boat");
  addDragShip(carrier);
  addDragShip(battleship);
  addDragShip(destroyer);
  addDragShip(submarine);
  addDragShip(patrolBoat);
}

export { addAllSpaceClickEvents, updateBoard, clearBoard, addDragAllShips };
