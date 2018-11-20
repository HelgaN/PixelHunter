import {addElement} from './../util';
import {currentState, game, Stats} from './../data/game';
import {getElementFromTemplate} from './../util';
import Application from './../app';

export default class GamePresenter {
/*  constructor(state) {
    this.state = state;
  }*/

  transitionPrevPage() {
    const backButton = document.querySelector(`.back`);

    backButton.onclick = () => {
      Application.showGreeting();
    };
  }

  updateLives() {   // header-game
    const div = document.querySelector(`.game__lives`);
    div.innerHTML = ``;
    div.innerHTML = `
     ${new Array(3 - this.state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
        ${new Array(this.state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}`;
    return div;
  }

  countQuestions (game) {
    game.numberOfQuestions++;
    console.log(game);
    return game;
  }

  timer() {   // timer
    const time = document.querySelector('.game__timer');
    function updateClock() {
      time.innerHTML--;

      if (time.innerHTML <= 0) {
        clearInterval(timeinterval);
      }

      if (time.innerHTML == 10) {
        time.style.color = `red`;
      }
    }
    const timeinterval = setInterval(updateClock, 1000);
  }

  analyzeTheSpeedOfAnswer (time) {
    if (time < 10) {
      return `slow`;
    } else if (time > 20) {
      return `fast`;
    } else {
      return `correct`;
    }
  }

  updateStats (state) {
    const elements = document.querySelectorAll(`.stats__result`);
    elements.forEach(function (el, i) {
      el.classList.remove(`stats__result--unknown`);
      el.classList.add(`stats__result--${state.userAnswers[i]}`);
    });
  };
/*
  handlingAnInvalidResponse() {
    currentState.userAnswers[currentState.numberOfQuestions - 1] = `wrong`;
    (currentState.lives > 0) ? currentState.lives -= 1 : currentState.lives;
    return currentState.lives;
  };*/
  handlingAnInvalidResponse() {
    currentState.userAnswers[currentState.numberOfQuestions] = `wrong`;
    (currentState.lives > 0) ? currentState.lives -= 1 : currentState.lives;
    return currentState.lives;
  };

  checkTheAnswerOfTypeTwo (data, time, gameState) {
    console.log(data, time, gameState);
    const inputsSelected = document.querySelectorAll(`input:checked`);
    ((inputsSelected[0].value == data[gameState.numberOfQuestions].imgOne.answer && inputsSelected[1].value == data[gameState.numberOfQuestions].imgTwo.answer)) ? gameState.userAnswers[gameState.numberOfQuestions] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
  }

  checkTheAnswerOfTypeOne (data, time, gameState) {
    const inputSelected = document.querySelector(`input:checked`);
    (inputSelected.value == data[gameState.numberOfQuestions].imgOne.answer) ? gameState.userAnswers[gameState.numberOfQuestions] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
  }

  checkTheAnswerOfTypeThree (evt, data, time, gameState) {
    const img = evt.target.querySelector(`img`);
    const srcImg = img.src;
    const imgs = [data[gameState.numberOfQuestions].imgOne.src, data[gameState.numberOfQuestions].imgTwo.src, data[gameState.numberOfQuestions].imgThree.src];
    const indexImg = imgs.indexOf(srcImg);

    if(indexImg === 0) {
      (data[gameState.numberOfQuestions].imgOne.answer === `paint`) ? gameState.userAnswers[gameState.numberOfQuestions] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
    } else if(indexImg === 1) {
      (data[gameState.numberOfQuestions].imgTwo.answer === `paint`) ? gameState.userAnswers[gameState.numberOfQuestions] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
    } else {
      (data[gameState.numberOfQuestions].imgThree.answer === `paint`) ? gameState.userAnswers[gameState.numberOfQuestions] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
    }
  }

  assessTheSuccess (state) {
    const userAnswers = (state.userAnswers).filter((answer) => {
      if(answer !== `unknown` && state.lives != 0) return answer;
    });
    let result;
    if (userAnswers.length == state.userAnswers.length) {
      return result = `Победа!`;
    }

    return result = `Поражение!`;
  }

  calculateRightAnswers (state) {
    const userAnswers = (state.userAnswers).filter((answer) => {
      if(answer !== `unknown` && answer !== `wrong`) return answer;
    });
    return userAnswers.length * 100;
  }

  calculateQuickAnswers (state) {
    const userAnswers = (state.userAnswers).filter((answer) => {
      if(answer === `fast`) return answer;
    });
    return userAnswers.length;
  }

  calculateQuickAnswersPoints (state) {
    const userAnswers = (state.userAnswers).filter((answer) => {
      if(answer === `fast`) return answer;
    });
    return userAnswers.length * 50;
  }

  calculateLivesBonus (state) {
    return state.lives;
  }

  calculateLivesBonusPoints (state) {
    return state.lives * 50;
  }

  calculateSlowAnswers (state) {
    const userAnswers = (state.userAnswers).filter((answer) => {
      if(answer === `slow`) return answer;
    });
    return userAnswers.length;
  }

  calculateSlowAnswersPoints (state) {
    const userAnswers = (state.userAnswers).filter((answer) => {
      if(answer === `slow`) return answer;
    });
    return userAnswers.length * (-50);
  }

  calculateTotalPoints (state) {
    const right = this.calculateRightAnswers(state);
    const quick = this.calculateQuickAnswersPoints(state);
    const live = this.calculateLivesBonusPoints(state);
    const slow = this.calculateSlowAnswersPoints(state);

    return right + quick + live + slow;
  }

  newScreenHandlerTypeTwo() {
    this.transitionPrevPage();
    let timer = this.timer();
    const setNextLevel = this.countQuestions;
    const setTime = setTimeout(() => {
      this.handlingAnInvalidResponse();
      setNextLevel(currentState);
      this.onStart();
    }, 31000);

    const inputs = document.querySelectorAll(`input`);

    inputs.forEach((input) => {
      input.addEventListener(`change`, () => {
        let inputsSelected = document.querySelectorAll(`input:checked`);
        if (inputsSelected.length === 2) {
          const time = document.querySelector('.game__timer').textContent;
          clearInterval(timer);
          clearInterval(setTime);
          this.checkTheAnswerOfTypeTwo(game, time, currentState);
          setNextLevel(currentState);
          this.onStart();
          inputsSelected[0].checked = false;
          inputsSelected[1].checked = false;
        }
      });
    });
}

newScreenHandlerTypeOne() {
  this.transitionPrevPage();
  let timer = this.timer();
  const setNextLevel = this.countQuestions;
  const setTime = setTimeout(() => {
    this.handlingAnInvalidResponse();
    setNextLevel(currentState);
    this.onStart();
  }, 31000);

  const inputs = document.querySelectorAll(`input`);
  inputs.forEach((input) => {
    input.addEventListener(`change`, () => {
      const time = document.querySelector('.game__timer').textContent;
      clearInterval(timer);
      clearInterval(setTime);
      this.checkTheAnswerOfTypeOne(game, time, currentState);
      setNextLevel(currentState);
      this.onStart();
      input.checked = false;
    });
  });
};

newScreenHandlerTypeThree() {
  this.transitionPrevPage();
  let timer = this.timer();
  const setNextLevel = this.countQuestions;
  const setTime = setTimeout(() => {
    this.handlingAnInvalidResponse();
    setNextLevel(currentState);
    this.onStart();
  }, 31000);

  const imgs = document.querySelectorAll(`.game__option`);

  imgs.forEach((img) => {
    img.addEventListener(`click`, (evt) => {
      const time = document.querySelector('.game__timer').textContent;
      clearInterval(timer);
      clearInterval(setTime);
      this.checkTheAnswerOfTypeThree(evt, game, time, currentState);
      setNextLevel(currentState);
      this.onStart();
    });
  });

}


  /*Конструктор должен принимать состояние игры state

   Конструктор должен создавать и управлять представлением игры GameView

  Запускать/останавливать отсчет времени в игре и обновлять состояние state и представление соответствующим образом

  Должен реагировать на действия происходящие в представлении (выбор ответа игроком), обрабатывать его и обновлять состояние и представление в соответсвии с ответом*/
  get template() {
    throw new Error(`You have to define template for view`);
  }

  getTemplate() {
    return getElementFromTemplate(this.template);
  }

  newScreenHandler() {

  }

  get element() {
    if (!this._element) {
      this._element = this.GameView();
      this.bind();
    }
    return this._element;
  }

}
