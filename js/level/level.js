import LevelView from './level-view';
import {changeView} from './../util';
import application from './../app';

export default class Level {
  constructor(state, data) {
    this.state = state;
    this.data = data;
    this.view = new LevelView(this.state, this.data);
  }

  init() {
    changeView(this.view.getTemplate());
    this.view.handler();

    this.view.onStart = () => {
      if(this.state.lives > 0 && this.state.numberOfQuestions < 10) {
        this.view = new LevelView(this.state, this.data);
        this.init();
      } else {
        application.showStats();
      }
    };
  }
};
