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

function addDragShip(shipDiv, boardDiv) {
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
    shipDiv.style.left = `${findNearestXSpaceEdge(
      shipDiv.style.left,
      boardDiv
    )}px`;
    shipDiv.style.top = `${findNearestYSpaceEdge(
      shipDiv.style.top,
      boardDiv
    )}px`;
  });
}

//when moving ship out of window, slightly off grid
function findNearestXSpaceEdge(offsetX, board) {
  const currentShipPos = parseInt(offsetX);
  const row = board.querySelector(".row");
  const firstSpace = row.children[0];
  let currentSpaceLeftEdge = firstSpace.getBoundingClientRect().left;
  let currentSpaceRightEdge = currentSpaceLeftEdge;
  for (let i = 0; i < 10; i++) {
    currentSpaceLeftEdge = currentSpaceRightEdge;
    currentSpaceRightEdge = row.children[i].getBoundingClientRect().left;
    if (currentSpaceRightEdge > currentShipPos) {
      return findClosestEdge(
        currentShipPos,
        currentSpaceLeftEdge,
        currentSpaceRightEdge,
        i
      );
    }
  }

  //inner spaces have no left border (2px wide) so have to adjust since ship does have left border
  //also right edge since ship "placed" on 2nd to last space's right edge
  return currentSpaceRightEdge - 2;
}

//when moving ship out of window, slightly off grid
function findNearestYSpaceEdge(offsetY, board) {
  //top property relative to parent (ships) container, so change relative to body (default) like offset
  const ships = document.getElementById("ships-container");
  ships.style.position = "initial";

  const currentShipPos = parseInt(offsetY);
  const firstSpace = board.children[0];
  let currentSpaceTopEdge = firstSpace.getBoundingClientRect().top;
  let currentSpaceBottomEdge = currentSpaceTopEdge;
  for (let i = 0; i < 10; i++) {
    currentSpaceTopEdge = currentSpaceBottomEdge;
    currentSpaceBottomEdge = board.children[i].getBoundingClientRect().top;
    if (currentSpaceBottomEdge > currentShipPos) {
      return findClosestEdge(
        currentShipPos,
        currentSpaceTopEdge,
        currentSpaceBottomEdge,
        i
      );
    }
  }

  //inner spaces have no top border (2px wide) so have to adjust since ship does have topp border
  //also bot edge since ship "placed" on 2nd to last space's bot edge
  return currentSpaceBottomEdge - 2;
}

//inner spaces have no left/top border (2px wide) so have to adjust since ship does have left/top border
function findClosestEdge(
  currentShipPos,
  leftOrTopEdge,
  rightOrBottomEdge,
  spaceIndex
) {
  const distanceFromRightOrBottom = rightOrBottomEdge - currentShipPos;
  //8 "feels" closer to middle this way rather than 4
  const distanceFromLeftOrTop = currentShipPos - leftOrTopEdge + 8;
  if (distanceFromRightOrBottom < distanceFromLeftOrTop) {
    return rightOrBottomEdge - 2;
  }

  //first col have left border so no need adjusting
  if (spaceIndex === 0 || spaceIndex === 1) {
    return leftOrTopEdge;
  }

  return leftOrTopEdge - 2;
}

function addDragAllShips(boardDiv) {
  const carrier = document.getElementById("carrier");
  const battleship = document.getElementById("battleship");
  const destroyer = document.getElementById("destroyer");
  const submarine = document.getElementById("submarine");
  const patrolBoat = document.getElementById("patrol-boat");
  addDragShip(carrier, boardDiv);
  addDragShip(battleship, boardDiv);
  addDragShip(destroyer, boardDiv);
  addDragShip(submarine, boardDiv);
  addDragShip(patrolBoat, boardDiv);
}

export { addAllSpaceClickEvents, updateBoard, clearBoard, addDragAllShips };
