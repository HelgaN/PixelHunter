import WelcomeView from './welcome-view';
import {changeView} from './../util';
import application from './../app';

export default class Welcome {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    application.showWelcome();
    changeView(this.view.getTemplate());
    this.view.newScreenHandler();

    this.view.onStart = () => {
      application.showGreeting();
    };
  }
};
