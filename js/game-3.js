import getElementFromTemplate from './getElementFromTemplate';
import addElement from './addElement';
import statsElement from './stats';

import {transitionPrevPage} from './prevPage';
import {timer} from './timer.js';
import headerGame from './header-game';
import initialState from './data/game.js';
import {game, countQuestions, currentState} from './data/game.js';

import {questionFour, questionSeven, questionTen} from './game-1';
import {transitionGameTwo} from './game-1';

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

const gameThreeElement = (state) => getElementFromTemplate(`
  ${headerGame(initialState)}
  <div class="game">
    ${gameThreeState(state)}
    ${stats}
  </div>
`);

export const questionThree = gameThreeElement(game[2]);
export const questionSix = gameThreeElement(game[5]);
export const questionNine = gameThreeElement(game[8]);

export default gameThreeElement;

export function transitionStats() {
  transitionPrevPage();
  timer();
  countQuestions(currentState);
  console.log(currentState);

  const imgs = document.querySelectorAll(`.game__option`);

  imgs.forEach(function (img) {
    img.addEventListener(`click`, function (timer) {
      /*addElement(statsElement, transitionPrevPage);*/
      if(currentState.numberOfQuestions == 7) {
        alert(`q4`);
        addElement(questionFour, transitionGameTwo);
      } else if(currentState.numberOfQuestions == 4) {
        alert(`q7`);
        addElement(questionSeven, transitionGameTwo);
      } else if(currentState.numberOfQuestions == 1/* !!!!*/) {
        alert(`q10`);
        addElement(questionTen, transitionGameTwo);
      }
    });
  });
}
