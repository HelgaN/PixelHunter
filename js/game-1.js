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
    ${gameOneState(state/*game[`two-pic`]*/)}
    ${stats(initialState)}
  </div>
`);

export const questionOne = gameOneElement(game[0]);
export const questionFour = gameOneElement(game[3]);
export const questionSeven = gameOneElement(game[6]);
export const questionTen = gameOneElement(game[9]);

export default gameOneElement;

const checkTheAnswerOfTypeTwo = (data, numQuestion, gameState, time) => {/*
  const inputsSelected = document.querySelectorAll(`input:checked`);
  (inputsSelected[0].value == data[numQuestion - 1].imgOne.answer && inputsSelected[1].value == data[numQuestion - 1].imgTwo.answer) ? gameState.userAnswers.push(true) : gameState.userAnswers.push(false);*/
  const inputsSelected = document.querySelectorAll(`input:checked`);
  (inputsSelected[0].value == data[numQuestion - 1].imgOne.answer && inputsSelected[1].value == data[numQuestion - 1].imgTwo.answer) ? analyzeTheSpeedOfAnswer(time) : /*gameState.userAnswers.push(`false-answer`)*/ handlingAnInvalidResponse();
}

export function transitionGameTwo() {
  transitionPrevPage();
  timer();
  (currentState.lives > 0) ? updateLives(currentState) : addElement(statsElement(currentState), transitionPrevPage);
  countQuestions(currentState);
  updateStats(currentState);
  console.log(currentState);

  const inputs = document.querySelectorAll(`input`);

  inputs.forEach(function (input) {
    input.addEventListener(`change`, function () {

      let inputsSelected = document.querySelectorAll(`input:checked`);
      if (inputsSelected.length === 2) {
          const time = document.querySelector('.game__timer').textContent;

          if(currentState.numberOfQuestions == 1) {
            checkTheAnswerOfTypeTwo(game, 1, currentState, time);
            addElement(questionTwo, transitionGameThree);
          } else if (currentState.numberOfQuestions == 4) {
            checkTheAnswerOfTypeTwo(game, 4, currentState, time);
            addElement(questionFive, transitionGameThree);
          } else if (currentState.numberOfQuestions == 7){
            checkTheAnswerOfTypeTwo(game, 7, currentState, time);
            addElement(questionEight, transitionGameThree);
          } else {
            checkTheAnswerOfTypeTwo(game, 10, currentState, time);
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






