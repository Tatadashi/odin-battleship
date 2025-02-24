import {
  addRestartButtonFunctionality,
  addStartButtonFunctionality,
  addDynamicPlayerNameInputForm,
} from "./otherJs/form.js";
import {
  addCloseButtonFunctionality,
  addReturnButtonFunctonality,
  addMenuButtonFunctionality,
  disableMostEscModal,
} from "./otherJs/modal.js";
import "./style.css";

function addAllButtonFunctionality() {
  addRestartButtonFunctionality();
  addStartButtonFunctionality();
  addCloseButtonFunctionality();
  addReturnButtonFunctonality();
  addMenuButtonFunctionality();
}

//initial setup
addAllButtonFunctionality();
addDynamicPlayerNameInputForm();
disableMostEscModal();

const mainMenu = document.getElementById("main-menu-modal");
mainMenu.showModal();

const coinModal = document.getElementById("coin-flip-modal");
// coinModal.showModal();
