import getElementFromTemplate from './getElementFromTemplate';
import addElement from './addElement';
import {questionOne} from './game-1';
import {transitionGameTwo} from './game-1';

import {transitionPrevPage} from './prevPage';
import {game} from './data/game.js';

const header = `  <header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>`;

const rules = `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>`;

const form = `<form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>`;

const rulesElement = getElementFromTemplate(`
  ${header}
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">
      ${rules}
      <br>
      Готовы?
    </p>
    ${form}
  </div>
`);

export default rulesElement;

const inputChange = (input, button) => {
  if (input.value !== ``) {
    button.disabled = false;
    alert(`q1`);
    button.onclick = () => addElement(questionOne, transitionGameTwo);
  } else {
    button.disabled = true;
  }
};

export function transitionGameOne() {
  transitionPrevPage();
  const input = document.querySelector(`.rules__input`);
  const button = document.querySelector(`.rules__button`);
  input.onchange = () => inputChange(input, button);
}






