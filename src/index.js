import "./style.css";
import { Player, Ship } from './classes.js'

function updateBoard(player) {
    let boardDiv;
    if (player.number === 1) {
        boardDiv = document.getElementById('board-1');
    }
    boardDiv = document.getElementById('board-2');

    const board = player.area.board;
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            //if has ship, if shot (if missed)
            const space = board[row][col];
            if (space.occupied && !spaceHasClass(boardDiv, row, col, 'ship')) {
                boardDiv.children[row].children[col].classList.add('ship');
            }

            if (space.shot && !space.missed && !spaceHasClass(boardDiv, row, col, "hit")) {
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

const player1 = new Player(1, false, 'Player 1');
const player2 = new Player(2, false, 'Player 2');

player1.area.place(new Ship(4), [0, 0], false);
player1.area.receiveAttack([0, 1]);
player1.area.receiveAttack([1, 4]);
updateBoard(player1);