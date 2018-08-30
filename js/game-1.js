import getElementFromTemplate from './getElementFromTemplate';
import addElement from './addElement';
import gameTwoElement from './game-2';
import {transitionGameThree} from './game-2';

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
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>`

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
    </form>`

const gameOneElement = getElementFromTemplate(`
  ${headerGame(initialState)}
  <div class="game">
    ${gameOneState(initialState)}
    ${stats}
  </div>
`);

export default gameOneElement;

export function transitionGameTwo() {
  transitionPrevPage();

 const inputs = document.querySelectorAll(`input`);
 inputs.forEach(function(input) {
   input.addEventListener("change", function() {
     let inputsSelected = document.querySelectorAll(`input:checked`);
     if(inputsSelected.length === 2) {
       addElement(gameTwoElement, transitionGameThree);
     }
   })
  });
};


