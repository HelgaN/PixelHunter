import getElementFromTemplate from './getElementFromTemplate';
import addElement from './addElement';
import statsElement from './stats';

import {transitionPrevPage} from './prevPage';
import headerGame from './header-game';
import initialState from './data/game.js';
import {game} from './data/game.js';

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

const gameThreeState = (state) => `<p class="game__task">${state.title}<!--Найдите рисунок среди изображений--></p>
    <form class="game__content  game__content--triple">
    <!-- http://placehold.it/304x455-->
      <div class="game__option">
        <img src="${state.imgOne.src}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${state.imgTwo.src}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${state.imgThree.src}" alt="Option 1" width="304" height="455">
      </div>
    </form>`;

const gameThreeElement = getElementFromTemplate(`
  ${headerGame(initialState)}
  <div class="game">
    ${gameThreeState(game[`three-pic`])}
    ${stats}
  </div>
`);

export default gameThreeElement;

export function transitionStats() {
  transitionPrevPage();

  const imgs = document.querySelectorAll(`.game__option`);

  imgs.forEach(function (img) {
    img.addEventListener(`click`, function () {
      addElement(statsElement, transitionPrevPage);
    });
  });
}
