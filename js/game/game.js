import {addElement} from './../util';
import {currentState, game, Stats} from './../data/game';
import {getElementFromTemplate} from './../util';
import Application from './../app';

export default class GamePresenter {
  constructor(state) {
    this.state = state;
  }

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

  handlingAnInvalidResponse() {
    currentState.userAnswers[currentState.numberOfQuestions - 1] = `wrong`;
    (currentState.lives > 0) ? currentState.lives -= 1 : currentState.lives;
    return currentState.lives;
  };

  checkTheAnswerOfTypeTwo (data, numQuestion, time, gameState) {
    const inputsSelected = document.querySelectorAll(`input:checked`);
    ((inputsSelected[0].value == data[numQuestion - 1].imgOne.answer && inputsSelected[1].value == data[numQuestion - 1].imgTwo.answer)) ? gameState.userAnswers[currentState.numberOfQuestions - 1] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
  }

  checkTheAnswerOfTypeOne (data, numQuestion, time, gameState) {
    const inputSelected = document.querySelector(`input:checked`);
    (inputSelected.value == data[numQuestion - 1].imgOne.answer) ? gameState.userAnswers[currentState.numberOfQuestions - 1] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
  }

  checkTheAnswerOfTypeThree (evt, data, numQuestion, time, gameState) {
    const img = evt.target.querySelector(`img`);
    const srcImg = img.src;
    const imgs = [data[numQuestion - 1].imgOne.src, data[numQuestion - 1].imgTwo.src, data[numQuestion - 1].imgThree.src];
    const indexImg = imgs.indexOf(srcImg);

    if(indexImg === 0) {
      (data[numQuestion - 1].imgOne.answer === `paint`) ? gameState.userAnswers[currentState.numberOfQuestions - 1] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
    } else if(indexImg === 1) {
      (data[numQuestion - 1].imgTwo.answer === `paint`) ? gameState.userAnswers[currentState.numberOfQuestions - 1] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
    } else {
      (data[numQuestion - 1].imgThree.answer === `paint`) ? gameState.userAnswers[currentState.numberOfQuestions - 1] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
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
