/*import {addElement} from './../util';
import greetingElement from './../screen/greeting-screen';
import rulesElement from './../screen/rules-screen';

import {questionOne, questionFour, questionSeven, questionTen} from './../screen/game-1-screen';
import {questionTwo, questionFive, questionEight} from './../screen/game-2-screen';
import {questionThree, questionSix, questionNine} from './../screen/game-3-screen';

import GamePresenter from './../game/game';
import {currentState, countQuestions, game, Stats} from './../data/game';
import initialState from './../data/game';
import Application from './../app';*/


// intro - greeting
/*
export function transitionRules() {
  const button = document.querySelector(`.intro__asterisk`);
  button.onclick = () => {
    addElement(greetingElement, transitionGo);
  };
};
*/
// greeting - rules
/*
export function transitionGo() {
  const button = document.querySelector(`.greeting__continue`);
  button.onclick = () => addElement(rulesElement, transitionGameOne);
};
*/
// prevPage

export function transitionPrevPage() {
  const backButton = document.querySelector(`.back`);

  backButton.onclick = () => {
    /*addElement(greetingElement, transitionGo);*/
    Application.showGame();
  };
}

// rules - game
// started some kind of hell !!
/*
const inputChange = (input, button) => {
  if (input.value !== ``) {
    button.disabled = false;
    button.onclick = () => addElement(questionOne, transitionGameTwo);
  } else {
    button.disabled = true;
  }
};

const transitionGameOne = () => {
  transitionPrevPage();
  const input = document.querySelector(`.rules__input`);
  const button = document.querySelector(`.rules__button`);
  input.onchange = () => inputChange(input, button);
}*/
/*
const transitionGameTwo = () => {
  transitionPrevPage();
  const presenter = new GamePresenter(currentState);
  presenter.timer();

  (currentState.lives > 0) ? presenter.updateLives() : Application.showStats(currentState);
  countQuestions(currentState);
  presenter.updateStats(currentState);

  let timerQ1;
  let timerQ4;
  let timerQ7;
  let timerQ10;

  if(currentState.numberOfQuestions == 1 && currentState.lives !== 0) {
    timerQ1 = setTimeout(function () {
      presenter.handlingAnInvalidResponse();
      addElement(questionTwo, transitionGameThree);
    }, 31000);
  } else if (currentState.numberOfQuestions == 4 && currentState.lives !== 0) {
    timerQ4 = setTimeout(function () {
      presenter.handlingAnInvalidResponse();
      addElement(questionFive, transitionGameThree);
    }, 31000);
  } else if (currentState.numberOfQuestions == 7 && currentState.lives !== 0){
    timerQ7 = setTimeout(function () {
      presenter.handlingAnInvalidResponse();
      addElement(questionEight, transitionGameThree);
    }, 31000);
  } else if (currentState.numberOfQuestions == 10 && currentState.lives !== 0) {
    timerQ10 = setTimeout(function () {
      presenter.handlingAnInvalidResponse();
      Application.showStats(currentState);
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
            presenter.checkTheAnswerOfTypeTwo(game, 1, time, currentState);
            addElement(questionTwo, transitionGameThree);
          } else if (currentState.numberOfQuestions == 4) {
            clearInterval(timerQ4);
            presenter.checkTheAnswerOfTypeTwo(game, 4, time, currentState);
            addElement(questionFive, transitionGameThree);
          } else if (currentState.numberOfQuestions == 7){
            clearInterval(timerQ7);
            presenter.checkTheAnswerOfTypeTwo(game, 7, time, currentState);
            addElement(questionEight, transitionGameThree);
          } else {
            clearInterval(timerQ10);
            presenter.checkTheAnswerOfTypeTwo(game, 10, time, currentState);
            console.log(currentState);
            Application.showStats(currentState);
            presenter.updateStats(currentState);
          }
          inputsSelected[0].checked = false;
          inputsSelected[1].checked = false;
        }
    });
  });
}


const transitionGameThree = () => {
  transitionPrevPage();
  const presenter = new GamePresenter(currentState);
  presenter.timer();
  (currentState.lives > 0) ? presenter.updateLives() : Application.showStats(currentState);
  countQuestions(currentState);
  presenter.updateStats(currentState);

  let timerQ2;
  let timerQ5;
  let timerQ8;

  if(currentState.numberOfQuestions == 2 && currentState.lives !== 0) {
    timerQ2 = setTimeout(function () {
      presenter.handlingAnInvalidResponse();
      addElement(questionThree, transitionStats);
    }, 31000);
  } else if (currentState.numberOfQuestions == 5 && currentState.lives !== 0) {
    timerQ5 = setTimeout(function () {
      presenter.handlingAnInvalidResponse();
      addElement(questionSix, transitionStats);
    }, 31000);
  } else if (currentState.numberOfQuestions == 8 && currentState.lives !== 0){
    timerQ8 = setTimeout(function () {
      presenter.handlingAnInvalidResponse();
      addElement(questionNine, transitionStats);
    }, 31000);
  };

  const inputs = document.querySelectorAll(`input`);
  inputs.forEach(function (input) {
    input.addEventListener(`change`, function () {
      const time = document.querySelector('.game__timer').textContent;

      if(currentState.numberOfQuestions == 2) {
        clearInterval(timerQ2);
        presenter.checkTheAnswerOfTypeOne(game, 2, time, currentState);
        addElement(questionThree, transitionStats);
      } else if(currentState.numberOfQuestions == 5) {
        clearInterval(timerQ5);
        presenter.checkTheAnswerOfTypeOne(game, 5, time, currentState);
        addElement(questionSix, transitionStats);
      } else if(currentState.numberOfQuestions == 8) {
        clearInterval(timerQ8);
        presenter.checkTheAnswerOfTypeOne(game, 8, time, currentState);
        addElement(questionNine, transitionStats);
      }
      input.checked = false;
    });
  });
};


const transitionStats = () => {
  transitionPrevPage();
  const presenter = new GamePresenter(currentState);
  presenter.timer();
  (currentState.lives > 0) ? presenter.updateLives(currentState) : Application.showStats(currentState);
  countQuestions(currentState);
  presenter.updateStats(currentState);

  let timerQ3;
  let timerQ6;
  let timerQ9;

  if(currentState.numberOfQuestions == 3 && currentState.lives !== 0) {
    timerQ3 = setTimeout(function () {
      presenter.handlingAnInvalidResponse();
      addElement(questionFour, transitionGameTwo);
    }, 31000);
  } else if (currentState.numberOfQuestions == 6 && currentState.lives !== 0) {
    timerQ6 = setTimeout(function () {
      presenter.handlingAnInvalidResponse();
      addElement(questionSeven, transitionGameTwo);
    }, 31000);
  } else if (currentState.numberOfQuestions == 9 && currentState.lives !== 0){
    timerQ9 = setTimeout(function () {
      presenter.handlingAnInvalidResponse();
      addElement(questionTen, transitionGameTwo);
    }, 31000);
  }

  const imgs = document.querySelectorAll(`.game__option`);

  imgs.forEach(function (img) {
    img.addEventListener(`click`, function (evt) {
      const time = document.querySelector('.game__timer').textContent;
      /*addElement(statsElement, transitionPrevPage);*//*
      if(currentState.numberOfQuestions == 3) {
        clearInterval(timerQ3);
        presenter.checkTheAnswerOfTypeThree(evt, game, 3, time, currentState);
        addElement(questionFour, transitionGameTwo);
      } else if(currentState.numberOfQuestions == 6) {
        clearInterval(timerQ6);
        presenter.checkTheAnswerOfTypeThree(evt, game, 6, time, currentState);
        addElement(questionSeven, transitionGameTwo);
      } else if(currentState.numberOfQuestions == 9) {
        clearInterval(timerQ9);
        presenter.checkTheAnswerOfTypeThree(evt, game, 9, time, currentState);
        addElement(questionTen, transitionGameTwo);
      }
    });
  });
}
*/
