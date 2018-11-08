import LevelView from './level-view';
import {changeView} from './../util';
import application from './../app';
import {currentState} from './../data/game';

export default class Level {
  constructor(state = currentState) {
    this.state = state;
    this.view = new LevelView();
  }

  init() {
    changeView(this.view.getTemplate());
    this.view.handler();

    this.view.onStart = () => {
      this.view = new LevelView(currentState);
      this.init();
    };
  }
};
