import {addElement} from './util';

export default class GamePresenter {
  constructor(state) {
    this.state = state;
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
