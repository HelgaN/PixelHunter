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
      if(currentState.lives > 0 && currentState.numberOfQuestions < 10) {
        console.log(currentState.lives);
        this.view = new LevelView(/*currentState*/);
        this.init();
      } else {
        application.showStats();
      }
    };
  }
};
