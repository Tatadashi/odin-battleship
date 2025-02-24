function getRandomCoord() {
  const randomRow = Math.floor(Math.random() * 10);
  const randomCol = Math.floor(Math.random() * 10);

  return [randomRow, randomCol];
}

function isOutOfBounds(coord, direction) {
  let conclusion;
  switch (direction) {
    case "top":
      conclusion = coord[0] - 1 < 0 || coord[0] - 1 >= 10;
      break;
    case "left":
      conclusion = coord[1] - 1 < 0 || coord[1] - 1 >= 10;
      break;
    case "bottom":
      conclusion = coord[0] + 1 < 0 || coord[0] + 1 >= 10;
      break;
    case "right":
      conclusion = coord[1] + 1 < 0 || coord[1] + 1 >= 10;
      break;
  }

  return conclusion;
}

export { getRandomCoord, isOutOfBounds };
