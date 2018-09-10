import getElementFromTemplate from './getElementFromTemplate';
import addElement from './addElement';
import {questionThree, questionSix, questionNine} from './game-3';
import {transitionStats} from './game-3';

import {transitionPrevPage} from './prevPage';
import {timer} from './timer.js';
import headerGame from './header-game';
import initialState from './data/game.js';
import {game, countQuestions, currentState} from './data/game.js';

import {analyzeTheSpeedOfAnswer} from './analyze-time';
import {handlingAnInvalidResponse} from './invalid-response';
import {updateLives} from './header-game';
import statsElement from './stats';
import stats from './stats-element';
import {updateStats} from './stats-element';
/*
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
    </div>`;*/

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

export const questionTwo = gameTwoElement(game[1]);
export const questionFive = gameTwoElement(game[4]);
export const questionEight = gameTwoElement(game[7]);

export default gameTwoElement;

const checkTheAnswerOfTypeOne = (data, numQuestion, time, gameState) => {
  const inputSelected = document.querySelector(`input:checked`);
  (inputSelected.value == data[numQuestion - 1].imgOne.answer) ? gameState.userAnswers[currentState.numberOfQuestions - 1] = analyzeTheSpeedOfAnswer(time) : handlingAnInvalidResponse();
}

export function transitionGameThree() {
  transitionPrevPage();
  timer();
  (currentState.lives > 0) ? updateLives(currentState) : addElement(statsElement(currentState), transitionPrevPage);
  countQuestions(currentState);
  updateStats(currentState);
  console.log(currentState);

  let timerQ2;
  let timerQ5;
  let timerQ8;

  if(currentState.numberOfQuestions == 2) {
    timerQ2 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionThree, transitionStats);
    }, 31000);
  } else if (currentState.numberOfQuestions == 5) {
    timerQ5 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionSix, transitionStats);
    }, 31000);
  } else if (currentState.numberOfQuestions == 8){
    timerQ8 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionNine, transitionStats);
    }, 31000);
  }

  const inputs = document.querySelectorAll(`input`);
  inputs.forEach(function (input) {
    input.addEventListener(`change`, function () {
      const time = document.querySelector('.game__timer').textContent;

      if(currentState.numberOfQuestions == 2) {
        clearInterval(timerQ2);
        checkTheAnswerOfTypeOne(game, 2, time, currentState);
        addElement(questionThree, transitionStats);
      } else if(currentState.numberOfQuestions == 5) {
        clearInterval(timerQ5);
        checkTheAnswerOfTypeOne(game, 5, time, currentState);
        addElement(questionSix, transitionStats);
      } else if(currentState.numberOfQuestions == 8) {
        clearInterval(timerQ8);
        checkTheAnswerOfTypeOne(game, 8, time, currentState);
        addElement(questionNine, transitionStats);
      }
      input.checked = false;
    });
  });
}

