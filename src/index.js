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
import { addDragAllShips } from "./otherJs/boardDOM.js";
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

//temp since have to removeEventListener during phase change 
const board1 = document.getElementById('board-1');
addDragAllShips(board1);

const mainMenu = document.getElementById("main-menu-modal");
// mainMenu.showModal();
