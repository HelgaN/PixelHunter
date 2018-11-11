import statsView from './stats-view';
import {changeView} from './../util';
import application from './../app';

export default class Stats {
  constructor() {
    this.view = new statsView();
  }

  init() {
    changeView(this.view.getTemplate());
    this.view.newScreenHandler();

    this.view.onStart = () => {
    /*  application.showGame();*/
    };
  }
};
