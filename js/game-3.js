import {addElement, getElementFromTemplate} from './util';
import statsElement from './stats';

import {transitionPrevPage} from './prevPage';
import {timer} from './timer.js';
import headerGame from './screen/header';
import initialState from './data/game.js';
import {game, countQuestions, currentState} from './data/game.js';

import {questionFour, questionSeven, questionTen} from './screen/game-1-screen';
import {transitionGameTwo} from './game-1';
import {analyzeTheSpeedOfAnswer} from './analyze-time';
import {handlingAnInvalidResponse} from './invalid-response';
import {updateLives} from './header-game';
import {updateStats} from './stats-element';
import stats from './stats-element';
import {questionThree, questionSix, questionNine} from './screen/game-3-screen';
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
    </div>`;
*/

const checkTheAnswerOfTypeThree = (evt, data, numQuestion, time, gameState) => {
  const img = evt.target.querySelector(`img`);
  const srcImg = img.src;
  const imgs = [data[numQuestion - 1].imgOne.src, data[numQuestion - 1].imgTwo.src, data[numQuestion - 1].imgThree.src];
  const indexImg = imgs.indexOf(srcImg);

  if(indexImg === 0) {
    (data[numQuestion - 1].imgOne.answer === `paint`) ? gameState.userAnswers[currentState.numberOfQuestions - 1] = analyzeTheSpeedOfAnswer(time) : handlingAnInvalidResponse();
  } else if(indexImg === 1) {
    (data[numQuestion - 1].imgTwo.answer === `paint`) ? gameState.userAnswers[currentState.numberOfQuestions - 1] = analyzeTheSpeedOfAnswer(time) : handlingAnInvalidResponse();
  } else {
    (data[numQuestion - 1].imgThree.answer === `paint`) ? gameState.userAnswers[currentState.numberOfQuestions - 1] = analyzeTheSpeedOfAnswer(time) : handlingAnInvalidResponse();
  }
}

export function transitionStats() {
  transitionPrevPage();
  timer();
  (currentState.lives > 0) ? updateLives(currentState) : addElement(statsElement(currentState), transitionPrevPage);
  countQuestions(currentState);
  updateStats(currentState);
  console.log(currentState);

  let timerQ3;
  let timerQ6;
  let timerQ9;

  if(currentState.numberOfQuestions == 3 && currentState.lives !== 0) {
    timerQ3 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionFour, transitionGameTwo);
    }, 31000);
  } else if (currentState.numberOfQuestions == 6 && currentState.lives !== 0) {
    timerQ6 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionSeven, transitionGameTwo);
    }, 31000);
  } else if (currentState.numberOfQuestions == 9 && currentState.lives !== 0){
    timerQ9 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionTen, transitionGameTwo);
    }, 31000);
  }

  const imgs = document.querySelectorAll(`.game__option`);

  imgs.forEach(function (img) {
    img.addEventListener(`click`, function (evt) {
      const time = document.querySelector('.game__timer').textContent;
      /*addElement(statsElement, transitionPrevPage);*/
      if(currentState.numberOfQuestions == 3) {
        clearInterval(timerQ3);
        checkTheAnswerOfTypeThree(evt, game, 3, time, currentState);
        addElement(questionFour, transitionGameTwo);
      } else if(currentState.numberOfQuestions == 6) {
        clearInterval(timerQ6);
        checkTheAnswerOfTypeThree(evt, game, 6, time, currentState);
        addElement(questionSeven, transitionGameTwo);
      } else if(currentState.numberOfQuestions == 9) {
        clearInterval(timerQ9);
        checkTheAnswerOfTypeThree(evt, game, 9, time, currentState);
        addElement(questionTen, transitionGameTwo);
      }
    });
  });
}
