import GreetingView from './greeting-view';
import {changeView} from './../util';
import application from './../app';

export default class Greeting {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    changeView(this.view.getTemplate());
    this.view.newScreenHandler();

    this.view.onStart = () => {
      application.showRules();
    };
  }
};
