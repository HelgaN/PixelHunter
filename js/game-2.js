import getElementFromTemplate from './getElementFromTemplate';
import addElement from './addElement';
import gameThreeElement from './game-3';
import {transitionStats} from './game-3';

import {transitionPrevPage} from './prevPage';
import headerGame from './header-game';
import initialState from './data.js';
import {questions} from './data.js';

const stats = `<div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>`;

const gameTwoState = (state) => `<p class="game__task">${state.title}<!--Угадай, фото или рисунок?--></p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
      <!-- http://placehold.it/705x455-->
        <img src="${state.imgOne.src}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;

const gameTwoElement = getElementFromTemplate(`
  ${headerGame(initialState)}
  <div class="game">
    ${gameTwoState(questions[`one-pic`])}
    ${stats}
  </div>
`);

export default gameTwoElement;

export function transitionGameThree() {
  transitionPrevPage();

  const inputs = document.querySelectorAll(`input`);
  inputs.forEach(function (input) {
    input.addEventListener(`change`, function () {
      addElement(gameThreeElement, transitionStats);
    });
  });
}

