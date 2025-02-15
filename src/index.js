import "./style.css";
import { Player, Ship } from './classes.js'

function updateBoard(player) {
    let boardDiv;
    if (player.number === 1) {
        boardDiv = document.getElementById('board-1');
    } else {
        boardDiv = document.getElementById('board-2');
    }

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

function startTurn(player) {
    const announcement = document.getElementById('announcement');
    announcement.textContent = `${player.name}'s Turn`;
}

/*
onclick specific space (SHOULD NOT BE CLICKABLE UNTIL INITIAL SETUP DONE)
    targetPlayer = identifyTarget() [check parent id?]

    check if player.area.board[coordY][coordX].shot === true
        player.area.receiveAttack(coord)
        check if player.area.hasShips()
            endgame()
        check if player.area.board[coordY][coordX].missed === false
            startTurn(player) [they go againn]
*/
function shoot(targetPlayer, coord) {
    const currentPlayer = findOtherPlayer(targetPlayer);
    if (!targetPlayer.area.board[coord[0]][coord[1]].shot) {
        targetPlayer.area.receiveAttack(coord);
        updateBoard(targetPlayer);

        if (!targetPlayer.area.hasShips()) {
            //endGame(targetPlayer);
        }

        if (!targetPlayer.area.board[coord[0]][coord[1]].missed) {
            startTurn(currentPlayer);
            console.log(currentPlayer)
            console.log(targetPlayer)
        } else {
            startTurn(targetPlayer);
        }
    } else {
        startTurn(currentPlayer);
    }
}

function findOtherPlayer(currentPlayer) {
    let otherPlayer = player1;
    if (currentPlayer.number === 1) {
        otherPlayer = player2;
    }

    return otherPlayer;
}

//initial setup
const player1 = new Player(1, false, 'Player 1');
const player2 = new Player(2, false, 'Player 2');
const player1Title = document.getElementById('player-1');
const player2Title = document.getElementById('player-2');
player1Title.textContent = `${player1.name}`;
player2Title.textContent = `${player2.name}`;
startTurn(player1);

//place turns
player1.area.place(new Ship(4), [0, 0], false);
player2.area.place(new Ship(4), [4, 2], true);

shoot(player2, [4, 2]);
shoot(player2, [4, 1]);
shoot(player1, [0, 1]);