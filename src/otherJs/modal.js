import { clearGame } from "./game.js";

function addReturnButtonFunctonality() {
  const returnButton = document.getElementById("return-home-button");
  returnButton.addEventListener("click", (e) => {
    const mainMenu = document.getElementById("main-menu-modal");
    mainMenu.showModal();
    clearGame();
  });
}

function addCloseButtonFunctionality() {
  const menuModal = document.getElementById("menu-modal");
  const closeButton = document.getElementById("close");
  closeButton.addEventListener("click", (e) => {
    menuModal.close();
  });
}

function addMenuButtonFunctionality() {
  const menuButton = document.getElementById("menu-button");
  menuButton.addEventListener("click", (e) => {
    const menu = document.getElementById("menu-modal");
    menu.showModal();
  });
}

function disableMostEscModal() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const menuModal = document.getElementById("menu-modal");
      menuModal.close();
      e.preventDefault();
    }
  });
}

export {
  addCloseButtonFunctionality,
  addReturnButtonFunctonality,
  addMenuButtonFunctionality,
  disableMostEscModal,
};
