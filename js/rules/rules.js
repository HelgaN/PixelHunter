import RulesView from './rules-view';
import {changeView} from './../util';
import application from './../app';

export default class Rules {
  constructor() {
    this.view = new RulesView();
  }

  init() {
    changeView(this.view.getTemplate());
    this.view.newScreenHandler();

    this.view.onStart = () => {
      application.showGame();
    };
  }
};
