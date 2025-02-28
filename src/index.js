import {
  addStartButtonFunctionality,
  addRestartButtonFunctionality,
  addReturnButtonFunctonality,
  addDynamicPlayerNameInputForm,
} from "./otherJs/form.js";
import {
  addCloseButtonFunctionality,
  addMenuButtonFunctionality,
  disableMostEscModal,
} from "./otherJs/modal.js";
import { addDragAllShips } from "./otherJs/dragShips.js";
import "./style.css";

function addAllButtonFunctionality() {
  addStartButtonFunctionality();
  addRestartButtonFunctionality();
  addReturnButtonFunctonality();
  addCloseButtonFunctionality();
  addMenuButtonFunctionality();
}

//initial setup
addAllButtonFunctionality();
addDynamicPlayerNameInputForm();
disableMostEscModal();

const mainMenu = document.getElementById("main-menu-modal");
// mainMenu.showModal();
