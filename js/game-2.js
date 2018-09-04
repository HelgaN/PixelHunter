import getElementFromTemplate from './getElementFromTemplate';
import addElement from './addElement';
import {questionThree, questionSix, questionNine} from './game-3';
import {transitionStats} from './game-3';

import {transitionPrevPage} from './prevPage';
import {timer} from './timer.js';
import headerGame from './header-game';
import initialState from './data/game.js';
import {game, countQuestions, currentState} from './data/game.js';

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

const gameTwoElement = (state) => getElementFromTemplate(`
  ${headerGame(initialState)}
  <div class="game">
    ${gameTwoState(state)}
    ${stats}
  </div>
`);

export const questionTwo = gameTwoElement(game[1]);
export const questionFive = gameTwoElement(game[4]);
export const questionEight = gameTwoElement(game[7]);

export default gameTwoElement;

export function transitionGameThree() {
  transitionPrevPage();
  timer();
  countQuestions(currentState);
  console.log(currentState);

  const inputs = document.querySelectorAll(`input`);
  inputs.forEach(function (input) {
    input.addEventListener(`change`, function () {
      input.checked = false;
      if(currentState.numberOfQuestions == 8) {
        alert(`q3`);
        addElement(questionThree, transitionStats);
      } else if(currentState.numberOfQuestions == 5) {
        alert(`q6`);
        addElement(questionSix, transitionStats);
      } else if(currentState.numberOfQuestions == 2) {
        alert(`q9`);
        addElement(questionNine, transitionStats);
      }
    });
  });
}

