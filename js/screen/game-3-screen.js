import stats from './../stats-element';
import headerGame from './header';
import initialState from './../data/game';
import {game} from './../data/game';
import {getElementFromTemplate} from './../util';

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
    ${stats(initialState)}
  </div>
`);

//export default gameThreeElement;

const questionThree = gameThreeElement(game[2]);
const questionSix = gameThreeElement(game[5]);
const questionNine = gameThreeElement(game[8]);

export {questionThree, questionSix, questionNine};
