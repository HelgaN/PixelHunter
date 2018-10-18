import {addElement, getElementFromTemplate} from './util';
import {questionThree, questionSix, questionNine} from './screen/game-3-screen';
import {transitionStats} from './game-3';

import {transitionPrevPage} from './prevPage';
import {timer} from './timer.js';
import headerGame from './screen/header';
import initialState from './data/game.js';
import {game, countQuestions, currentState} from './data/game.js';

import {analyzeTheSpeedOfAnswer} from './analyze-time';
import {handlingAnInvalidResponse} from './invalid-response';
import {updateLives} from './header-game';
import statsElement from './stats';
import {updateStats, stats} from './stats-element';
import {questionTwo, questionFive, questionEight} from './screen/game-2-screen';

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

  if(currentState.numberOfQuestions == 2 && currentState.lives !== 0) {
    timerQ2 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionThree, transitionStats);
    }, 31000);
  } else if (currentState.numberOfQuestions == 5 && currentState.lives !== 0) {
    timerQ5 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionSix, transitionStats);
    }, 31000);
  } else if (currentState.numberOfQuestions == 8 && currentState.lives !== 0){
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
