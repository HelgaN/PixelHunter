import LevelView from './level-view';
import {changeView} from './../util';
import application from './../app';

export default class Level {
  constructor() {
    this.view = new LevelView();
  }

  init() {
    changeView(this.view.getTemplate());
    this.view.newScreenHandler();

    this.view.onStart = () => {
      application.showGame();
    };
  }
};
