function findSelected(player) {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      if (player.area.board[row][col].selected === true) {
        return [row, col];
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

export { findSelected, spaceHasClass };
