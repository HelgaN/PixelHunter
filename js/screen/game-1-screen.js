import stats from './../stats-element';
import headerGame from './header';
import initialState from './../data/game';
import {game} from './../data/game';
import {getElementFromTemplate} from './../util';

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
    ${gameOneState(state)}
    ${stats(initialState)}
  </div>
`);

/*export default gameOneElement;*/
const questionOne = gameOneElement(game[0]);
const questionFour = gameOneElement(game[3]);
const questionSeven = gameOneElement(game[6]);
const questionTen = gameOneElement(game[9]);

export {questionOne, questionFour, questionSeven, questionTen};
