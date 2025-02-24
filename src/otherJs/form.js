import { openCoinFlipModal } from "./modal.js";
import { clearGame } from "./game.js";
import { createPlayers } from "./player.js";

function submitStartGameForm(form) {
  const formData = new FormData(form);
  const player1Name = formData.get("player-1-name");
  const player2Name = formData.get("player-2-name");
  const player1Input = document.getElementById("player-1-name");
  const player2Input = document.getElementById("player-2-name");
  const isP1Computer = checkIfComputerWithForm(player1Input, formData);
  const isP2Computer = checkIfComputerWithForm(player2Input, formData);
  createPlayers(player1Name, player2Name, isP1Computer, isP2Computer);

  const mainMenu = document.getElementById("main-menu-modal");
  mainMenu.close();
  openCoinFlipModal();
}

function addStartButtonFunctionality() {
  const startButton = document.getElementById("start-game-button");
  startButton.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("main-menu");
    submitStartGameForm(form);
  });
}

function addRestartButtonFunctionality() {
  const menu = document.getElementById("menu-modal");
  menu.close();

  const restartButtons = document.querySelectorAll(".restart-button");
  restartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      restartGame();
    });
  });
}

function restartGame() {
  clearGame();
  openCoinFlipModal();
}

function addReturnButtonFunctonality() {
  const returnButton = document.getElementById("return-home-button");
  returnButton.addEventListener("click", (e) => {
    const mainMenu = document.getElementById("main-menu-modal");
    mainMenu.showModal();
    clearGame();
  });
}

function addDynamicPlayerNameInputForm() {
  const modeSelection = document.getElementById("mode-selection");
  modeSelection.addEventListener("change", (e) => {
    const player1Input = document.getElementById("player-1-input");
    const player2Input = document.getElementById("player-2-input");
    switch (modeSelection.value) {
      case "PvP":
        player1Input.style.display = "block";
        player2Input.style.display = "block";
        break;
      case "PvC":
        player1Input.style.display = "block";
        player2Input.style.display = "none";
        break;
      case "CvP":
        player1Input.style.display = "none";
        player2Input.style.display = "block";
        break;
      case "CvC":
        player1Input.style.display = "none";
        player2Input.style.display = "none";
        break;
    }
  });
}

function checkIfComputerWithForm(player, formData) {
  const mode = formData.get("mode");
  const player1Input = document.getElementById("player-1-name");
  const player2Input = document.getElementById("player-2-name");

  switch (mode) {
    case "PvP":
      return false;
    case "PvC":
      if (player === player1Input) {
        return false;
      }
      return true;
    case "CvP":
      if (player === player2Input) {
        return false;
      }
      return true;
    case "CvC":
      return true;
  }
}

export {
  addStartButtonFunctionality,
  addRestartButtonFunctionality,
  addReturnButtonFunctonality,
  addDynamicPlayerNameInputForm,
};
