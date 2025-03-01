import { updateBoard, clearBoard } from "./boardDOM";
import { Ship } from "./classes";

function addDragShip(shipDiv, boardDiv, player) {
  let ogOffsetX, ogOffsetY, offsetX, offsetY;
  const move = (e) => {
    shipDiv.style.left = `${e.clientX - offsetX}px`;
    shipDiv.style.top = `${e.clientY - offsetY}px`;
    shipDiv.style.zIndex = 1;
  };

  shipDiv.addEventListener("mousedown", (e) => {
    //top property relative to parent (ships) container, so change relative to body (default) like offset
    const ships = document.getElementById("ships-container");
    ships.style.position = "initial";

    ogOffsetX = shipDiv.offsetLeft;
    ogOffsetY = shipDiv.offsetTop;
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

    const topEdgeAndIndex = findNearestYSpaceEdge(
      shipDiv.style.top,
      boardDiv,
      player
    );
    shipDiv.style.top = `${topEdgeAndIndex[0]}px`;

    const leftEdgeAndIndex = findNearestXSpaceEdge(
      shipDiv.style.left,
      boardDiv,
      player
    );
    shipDiv.style.left = `${leftEdgeAndIndex[0]}px`;

    const shipName = shipDiv.getAttribute("id");
    const shipLength = returnShipLengthBasedOnName(shipName);
    const coords = [topEdgeAndIndex[1], leftEdgeAndIndex[1]];
    const isVertical = shipDiv.classList.contains("vertical");
    const isPlaced = player.area.place(
      new Ship(shipLength, shipName),
      coords,
      isVertical,
      shipName
    );
    if (!isPlaced) {
      shipDiv.style.top = `${ogOffsetY}px`;
      shipDiv.style.left = `${ogOffsetX}px`;
    }
    clearBoard(player);
    updateBoard(player);

    if (player.area.shipCount === 5) {
      const placeButton = document.getElementById("place-button");
      placeButton.style.backgroundColor = "bisque";
    }
  });
}

function returnShipLengthBasedOnName(shipName) {
  switch (shipName) {
    case "carrier":
      return 5;
    case "battleship":
      return 4;
    case "destroyer":
      return 3;
    case "submarine":
      return 3;
    case "patrol-boat":
      return 2;
  }
}

//when moving ship out of window, slightly off grid
function findNearestXSpaceEdge(offsetX, board) {
  let edgeAndIndex = [];
  const currentShipPos = parseInt(offsetX);
  const row = board.querySelector(".row");
  const firstSpace = row.children[0];
  let currentSpaceLeftEdge = firstSpace.getBoundingClientRect().left;
  let currentSpaceRightEdge = currentSpaceLeftEdge;
  for (let i = 0; i < 10; i++) {
    currentSpaceLeftEdge = currentSpaceRightEdge;
    currentSpaceRightEdge = row.children[i].getBoundingClientRect().left;
    if (currentSpaceRightEdge > currentShipPos) {
      edgeAndIndex = findClosestEdge(
        currentShipPos,
        currentSpaceLeftEdge,
        currentSpaceRightEdge,
        i
      );
      return edgeAndIndex;
    }
  }

  //inner spaces have no left border (2px wide) so have to adjust since ship does have left border
  //also right edge since ship "placed" on 2nd to last space's right edge
  edgeAndIndex.push(currentSpaceRightEdge - 2);
  edgeAndIndex.push(9);
  return edgeAndIndex;
}

//when moving ship out of window, slightly off grid
function findNearestYSpaceEdge(offsetY, board) {
  const ships = document.getElementById("ships-container");
  ships.style.position = "initial";

  let edgeAndIndex = [];
  const currentShipPos = parseInt(offsetY);
  const firstSpace = board.children[0];
  let currentSpaceTopEdge = firstSpace.getBoundingClientRect().top;
  let currentSpaceBottomEdge = currentSpaceTopEdge;
  for (let i = 0; i < 10; i++) {
    currentSpaceTopEdge = currentSpaceBottomEdge;
    currentSpaceBottomEdge = board.children[i].getBoundingClientRect().top;
    if (currentSpaceBottomEdge > currentShipPos) {
      edgeAndIndex = findClosestEdge(
        currentShipPos,
        currentSpaceTopEdge,
        currentSpaceBottomEdge,
        i
      );
      return edgeAndIndex;
    }
  }

  //inner spaces have no top border (2px wide) so have to adjust since ship does have topp border
  //also bot edge since ship "placed" on 2nd to last space's bot edge
  edgeAndIndex.push(currentSpaceBottomEdge - 2);
  edgeAndIndex.push(9);
  return edgeAndIndex;
}

//inner spaces have no left/top border (2px wide) so have to adjust since ship does have left/top border
function findClosestEdge(
  currentShipPos,
  leftOrTopEdge,
  rightOrBottomEdge,
  spaceIndex
) {
  const edgeAndIndex = [];
  const distanceFromRightOrBottom = rightOrBottomEdge - currentShipPos;
  //9 "feels" closer to middle this way rather than 4 (prob bcz red (5px) border)
  const distanceFromLeftOrTop = currentShipPos - leftOrTopEdge + 9;
  if (distanceFromRightOrBottom < distanceFromLeftOrTop) {
    edgeAndIndex.push(rightOrBottomEdge - 2);
    edgeAndIndex.push(spaceIndex);
    return edgeAndIndex;
  }

  //first col have left border so no need adjusting
  if (spaceIndex === 0 || spaceIndex === 1) {
    edgeAndIndex.push(leftOrTopEdge);
    edgeAndIndex.push(0);
    return edgeAndIndex;
  }

  //spaceIndex - 1 since spaceIndex is if rightOrBottomEdge is set to ship's leftOrTopEdge
  edgeAndIndex.push(leftOrTopEdge - 2);
  edgeAndIndex.push(spaceIndex - 1);
  return edgeAndIndex;
}

function addDragAllShips(boardDiv, player) {
  const carrier = document.getElementById("carrier");
  const battleship = document.getElementById("battleship");
  const destroyer = document.getElementById("destroyer");
  const submarine = document.getElementById("submarine");
  const patrolBoat = document.getElementById("patrol-boat");
  addDragShip(carrier, boardDiv, player);
  addDragShip(battleship, boardDiv, player);
  addDragShip(destroyer, boardDiv, player);
  addDragShip(submarine, boardDiv, player);
  addDragShip(patrolBoat, boardDiv, player);
}

function removeAllShips() {
  const carrier = document.getElementById("carrier");
  const battleship = document.getElementById("battleship");
  const destroyer = document.getElementById("destroyer");
  const submarine = document.getElementById("submarine");
  const patrolBoat = document.getElementById("patrol-boat");
  carrier.style.display = "none";
  battleship.style.display = "none";
  destroyer.style.display = "none";
  submarine.style.display = "none";
  patrolBoat.style.display = "none";
}

function resetShipPositions(player) {
  const carrier = document.getElementById("carrier");
  const battleship = document.getElementById("battleship");
  const destroyer = document.getElementById("destroyer");
  const submarine = document.getElementById("submarine");
  const patrolBoat = document.getElementById("patrol-boat");
  resetShipH(carrier);
  resetShipH(battleship);
  resetShipH(destroyer);
  resetShipH(submarine);
  resetShipH(patrolBoat);

  const boardDiv = document.getElementById(`board-${player.number}`);
  setAllShipsToH(boardDiv, player);
}

function setAllShipsToH(boardDiv, player) {
  const shipNameList = [
    "carrier",
    "battleship",
    "destroyer",
    "submarine",
    "patrol-boat",
  ];
  for (let i = 0; i < 5; i++) {
    //bcz setRotate deletes and clones, have to reget the id
    const shipDiv = document.getElementById(`${shipNameList[i]}`);
    if (shipDiv.classList.contains("vertical")) {
      setRotate(shipDiv, boardDiv, player);
    }
  }
}

function resetShipH(shipDiv) {
  const shipName = shipDiv.getAttribute("id");
  //empty since it was initially empty and not 0px (top/bot changes ship size)
  shipDiv.style.top = "";

  switch (shipName) {
    case "carrier":
      const carrier = document.getElementById("carrier");
      carrier.style.left = "5vw";
      break;
    case "battleship":
      const battleship = document.getElementById("battleship");
      battleship.style.left = "30vw";
      break;
    case "destroyer":
      const destroyer = document.getElementById("destroyer");
      destroyer.style.left = "55vw";
      break;
    case "submarine":
      const submarine = document.getElementById("submarine");
      submarine.style.left = "72vw";
      break;
    case "patrol-boat":
      const patrolBoat = document.getElementById("patrol-boat");
      patrolBoat.style.left = "90vw";
      break;
  }
}

function resetShipV(shipDiv) {
  const shipName = shipDiv.getAttribute("id");
  const shipsContainer = document.getElementById("ships-container");
  shipsContainer.style.position = "initial";
  shipDiv.style.top = "300px";

  switch (shipName) {
    case "carrier":
      const carrier = document.getElementById("carrier");
      carrier.style.left = "1vw";
      break;
    case "battleship":
      const battleship = document.getElementById("battleship");
      battleship.style.left = "42vw";
      break;
    case "destroyer":
      const destroyer = document.getElementById("destroyer");
      destroyer.style.left = "51vw";
      break;
    case "submarine":
      const submarine = document.getElementById("submarine");
      submarine.style.left = "56vw";
      break;
    case "patrol-boat":
      const patrolBoat = document.getElementById("patrol-boat");
      patrolBoat.style.left = "96vw";
      break;
  }
}

function setRotate(ship, boardDiv, player) {
  const shipName = ship.getAttribute("id");
  const shipLength = returnShipLengthBasedOnName(shipName);

  const isVertical = ship.classList.contains("vertical");
  if (isVertical) {
    ship.classList.remove("vertical");
    resetShipH(ship);
    for (let i = 0; i < shipLength; i++) {
      if (i !== 0) {
        ship.children[i].classList.add("top");
        ship.children[i].classList.remove("left");
      }
    }
  } else {
    ship.classList.add("vertical");
    resetShipV(ship);
    for (let i = 0; i < shipLength; i++) {
      if (i !== 0) {
        ship.children[i].classList.remove("top");
        ship.children[i].classList.add("left");
      }
    }
  }

  const shipsContainer = document.getElementById("ships-container");
  shipsContainer.replaceWith(shipsContainer.cloneNode(true));
  addDragAllShips(boardDiv, player);
  addAllRotateClick(boardDiv, player);
}

function addRotateClick(shipDiv, boardDiv, player) {
  shipDiv.addEventListener("dblclick", (e) => {
    setRotate(shipDiv, boardDiv, player);
  });
}

function addAllRotateClick(boardDiv, player) {
  const carrier = document.getElementById("carrier");
  const battleship = document.getElementById("battleship");
  const destroyer = document.getElementById("destroyer");
  const submarine = document.getElementById("submarine");
  const patrolBoat = document.getElementById("patrol-boat");
  addRotateClick(carrier, boardDiv, player);
  addRotateClick(battleship, boardDiv, player);
  addRotateClick(destroyer, boardDiv, player);
  addRotateClick(submarine, boardDiv, player);
  addRotateClick(patrolBoat, boardDiv, player);
}

export {
  addDragAllShips,
  removeAllShips,
  resetShipPositions,
  returnShipLengthBasedOnName,
  addAllRotateClick,
};
