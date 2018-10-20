import stats from './stats-game';
import headerGame from './header';
import initialState from './../data/game';
import {game, currentState} from './../data/game';
import {getElementFromTemplate} from './../util';

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
    ${stats(currentState)}
  </div>
`);

/*export default gameTwoElement;*/

const questionTwo = gameTwoElement(game[1]);
const questionFive = gameTwoElement(game[4]);
const questionEight = gameTwoElement(game[7]);

export {questionTwo, questionFive, questionEight};
