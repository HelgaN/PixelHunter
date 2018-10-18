import {addElement} from './util';

export default class GamePresenter {
  constructor(state) {
    this.state = state;
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
  /*Конструктор должен принимать состояние игры state

   Конструктор должен создавать и управлять представлением игры GameView

  Запускать/останавливать отсчет времени в игре и обновлять состояние state и представление соответствующим образом

  Должен реагировать на действия происходящие в представлении (выбор ответа игроком), обрабатывать его и обновлять состояние и представление в соответсвии с ответом*/
  get template() {
    throw new Error(`You have to define template for view`);
  }

  get newScreen() {
    throw new Error(`You must pass the function to the next screen`)
  }

  GameView() {
    return addElement(this.template, this.newScreen);
  }

  get element() {
    if (!this._element) {
      this._element = this.GameView();
      this.bind();
    }
    return this._element;
  }


}
