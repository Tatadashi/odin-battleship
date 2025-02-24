import { chooseRandomPlayer, findOtherPlayer } from "./player";
import { startGame } from "./game";

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

function openCoinFlipModal() {
  const coinFlipModal = document.getElementById("coin-flip-modal");
  coinFlipModal.showModal();

  const announcement = document.getElementById("coin-flip-announcement");
  announcement.textContent = "Heads or Tails?";
  showCoinFlipButtons();

  const player = chooseRandomPlayer();
  const hiddenResult = chooseRandomCoinFlipResult();
  if (player.isComputer) {
    const coinFlipChampion = coinFlipResult(player, chooseRandomCoinFlipResult(), hiddenResult);
    determineTurnOrder(coinFlipChampion);
  } else {
    addCoinFlipClick(player, hiddenResult);
  }
}

function chooseRandomCoinFlipResult() {
  const randomNumber = Math.floor(Math.random() * 2);
  return randomNumber === 0 ? "Heads" : "Tails";
}

function showTurnChoiceButtons() {
  const headsButton = document.getElementById("heads");
  const tailsButton = document.getElementById("tails");
  const firstButton = document.getElementById("first");
  const secondButton = document.getElementById("second");
  headsButton.style.display = "none";
  tailsButton.style.display = "none";
  firstButton.style.display = "block";
  secondButton.style.display = "block";
}

function determineTurnOrder(coinFlipChampion) {
  const prompt = document.getElementById("coin-chooser");
  prompt.textContent = `Player: ${coinFlipChampion.name}`;
  const announcement = document.getElementById("coin-flip-announcement");
  announcement.textContent = "Choose your preferred order";
  showTurnChoiceButtons();

  const firstButton = document.getElementById("first");
  const secondButton = document.getElementById("second");
  const otherPlayer = findOtherPlayer(coinFlipChampion);

  if (coinFlipChampion.isComputer) {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
      startGame(coinFlipChampion);
    } else {
      startGame(otherPlayer);
    }
    const coinFlipModal = document.getElementById('coin-flip-modal');
    coinFlipModal.close();
    return;
  }

  firstButton.addEventListener("click", (e) => {
    startGame(coinFlipChampion);
  });

  secondButton.addEventListener("click", (e) => {
    startGame(otherPlayer);
  });
}

function showCoinFlipButtons() {
  const headsButton = document.getElementById("heads");
  const tailsButton = document.getElementById("tails");
  const firstButton = document.getElementById("first");
  const secondButton = document.getElementById("second");
  headsButton.style.display = "block";
  tailsButton.style.display = "block";
  firstButton.style.display = "none";
  secondButton.style.display = "none";
}

function addCoinFlipClick(player, result) {
  const headsButton = document.getElementById("heads");
  const tailsButton = document.getElementById("tails");

  headsButton.addEventListener("click", (e) => {
    e.preventDefault();
    const coinFlipWinner = coinFlipResult(player, "Heads", result);
    determineTurnOrder(coinFlipWinner);
  });

  tailsButton.addEventListener("click", (e) => {
    e.preventDefault();
    const coinFlipWinner = coinFlipResult(player, "Tails", result);
    determineTurnOrder(coinFlipWinner);
  });
}

function coinFlipResult(player, guess, result) {
  const otherPlayer = findOtherPlayer(player);
  return guess === result ? player : otherPlayer;
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
  addMenuButtonFunctionality,
  openCoinFlipModal,
  disableMostEscModal,
};
