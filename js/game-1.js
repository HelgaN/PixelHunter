import getElementFromTemplate from './getElementFromTemplate';
import addElement from './addElement';
import {questionTwo, questionFive, questionEight} from './game-2';
import {transitionGameThree} from './game-2';
import stats from './stats-element';

import {transitionPrevPage} from './prevPage';
import {timer} from './timer.js';
import headerGame from './header-game';
import initialState from './data/game.js';
import {game, countQuestions, currentState} from './data/game.js';
import {analyzeTheSpeedOfAnswer} from './analyze-time';
import {handlingAnInvalidResponse} from './invalid-response';
import {updateLives} from './header-game';
import {updateStats} from './stats-element';

import statsElement from './stats';

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

export const questionOne = gameOneElement(game[0]);
export const questionFour = gameOneElement(game[3]);
export const questionSeven = gameOneElement(game[6]);
export const questionTen = gameOneElement(game[9]);

export default gameOneElement;

const checkTheAnswerOfTypeTwo = (data, numQuestion, time, gameState) => {
  const inputsSelected = document.querySelectorAll(`input:checked`);
  ((inputsSelected[0].value == data[numQuestion - 1].imgOne.answer && inputsSelected[1].value == data[numQuestion - 1].imgTwo.answer)) ? gameState.userAnswers[currentState.numberOfQuestions - 1] = analyzeTheSpeedOfAnswer(time) : handlingAnInvalidResponse();
}

export function transitionGameTwo() {
  transitionPrevPage();
  timer();

  (currentState.lives > 0) ? updateLives(currentState) : addElement(statsElement(currentState), transitionPrevPage);
  countQuestions(currentState);
  updateStats(currentState);
  console.log(currentState);

  let timerQ1;
  let timerQ4;
  let timerQ7;
  let timerQ10;

  if(currentState.numberOfQuestions == 1) {
    timerQ1 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionTwo, transitionGameThree);
    }, 31000);
  } else if (currentState.numberOfQuestions == 4) {
    timerQ4 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionFive, transitionGameThree);
    }, 31000);
  } else if (currentState.numberOfQuestions == 7){
    timerQ7 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionEight, transitionGameThree);
    }, 31000);
  } else {
    timerQ10 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(statsElement(currentState), transitionPrevPage);
    }, 31000);
  }

  const inputs = document.querySelectorAll(`input`);

  inputs.forEach(function (input) {
    input.addEventListener(`change`, function () {

      let inputsSelected = document.querySelectorAll(`input:checked`);
      if (inputsSelected.length === 2) {
          const time = document.querySelector('.game__timer').textContent;

          if(currentState.numberOfQuestions == 1) {
            clearInterval(timerQ1);
            checkTheAnswerOfTypeTwo(game, 1, time, currentState);
            addElement(questionTwo, transitionGameThree);
          } else if (currentState.numberOfQuestions == 4) {
            clearInterval(timerQ4);
            checkTheAnswerOfTypeTwo(game, 4, time, currentState);
            addElement(questionFive, transitionGameThree);
          } else if (currentState.numberOfQuestions == 7){
            clearInterval(timerQ7);
            checkTheAnswerOfTypeTwo(game, 7, time, currentState);
            addElement(questionEight, transitionGameThree);
          } else {
            clearInterval(timerQ10);
            checkTheAnswerOfTypeTwo(game, 10, time, currentState);
            console.log(currentState);
            addElement(statsElement(currentState), transitionPrevPage);
            updateStats(currentState);
          }
          inputsSelected[0].checked = false;
          inputsSelected[1].checked = false;
        }
    });
  });
}






