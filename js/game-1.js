import getElementFromTemplate from './getElementFromTemplate';
import addElement from './addElement';
import {questionTwo, questionFive, questionEight} from './game-2';
import {transitionGameThree} from './game-2';

import {transitionPrevPage} from './prevPage';
import {timer} from './timer.js';
import headerGame from './header-game';
import initialState from './data/game.js';
import {game, countQuestions, currentState} from './data/game.js';

import statsElement from './stats';

const stats = `<div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>`;

const gameOneState = (state) => `<p class="game__task">${state.title}<!--Угадайте для каждого изображения фото или рисунок?--></p>
    <form class="game__content">
      <div class="game__option">
      <!--http://placehold.it/468x458 -->
        <img src="${state.imgOne.src}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
      <!--http://placehold.it/468x458 -->
        <img src="${state.imgTwo.src}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;

const gameOneElement = (state) => getElementFromTemplate(`
  ${headerGame(initialState)}
  <div class="game">
    ${gameOneState(state/*game[`two-pic`]*/)}
    ${stats}
  </div>
`);

export const questionOne = gameOneElement(game[0]);
export const questionFour = gameOneElement(game[3]);
export const questionSeven = gameOneElement(game[6]);
export const questionTen = gameOneElement(game[9]);

export default gameOneElement;

export function transitionGameTwo() {
  transitionPrevPage();
  timer();
  countQuestions(currentState);
  console.log(currentState);

  const inputs = document.querySelectorAll(`input`);

  inputs.forEach(function (input) {
    input.addEventListener(`change`, function () {
      let inputsSelected = document.querySelectorAll(`input:checked`);
      if (inputsSelected.length === 2) {
          inputsSelected[0].checked = false;
          inputsSelected[1].checked = false;
          if(currentState.numberOfQuestions >= 9) {
            alert(`q2`);
            addElement(questionTwo, transitionGameThree);
          } else if (currentState.numberOfQuestions == 6) {
            addElement(questionFive, transitionGameThree);
            alert(`q5`);
          } else if (currentState.numberOfQuestions == 3){
            addElement(questionEight, transitionGameThree);
            alert(`q8`);
          } else {
            addElement(statsElement, transitionPrevPage);
          }
        }
    });
  });
}






