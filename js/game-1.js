import {addElement} from './util';
import {questionTwo, questionFive, questionEight} from './screen/game-2-screen';
import {questionOne, questionFour, questionSeven, questionTen} from './screen/game-1-screen';
import {transitionGameThree} from './game-2';
import {transitionPrevPage} from './prevPage';
import {timer} from './timer.js';
import {game, countQuestions, currentState} from './data/game.js';
import {analyzeTheSpeedOfAnswer} from './analyze-time';
import {handlingAnInvalidResponse} from './invalid-response';
import {updateLives} from './header-game';
import {updateStats} from './stats-element';
import stats from './stats-element';
import statsElement from './stats';

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

  if(currentState.numberOfQuestions == 1 && currentState.lives !== 0) {
    timerQ1 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionTwo, transitionGameThree);
    }, 31000);
  } else if (currentState.numberOfQuestions == 4 && currentState.lives !== 0) {
    timerQ4 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionFive, transitionGameThree);
    }, 31000);
  } else if (currentState.numberOfQuestions == 7 && currentState.lives !== 0){
    timerQ7 = setTimeout(function () {
      handlingAnInvalidResponse();
      addElement(questionEight, transitionGameThree);
    }, 31000);
  } else if (currentState.numberOfQuestions == 10 && currentState.lives !== 0) {
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
