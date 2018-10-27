import introElement from './screen/intro-screen';
import greetingElement from './screen/greeting-screen';
import rulesElement from './screen/rules-screen';
import footerElement from './screen/footer';
import {addElement} from './util';
import {transitionRules, transitionGo, transitionPrevPage} from './handlers/handlers';
import {currentState} from './data/game';
import statsElement from './screen/stats-screen';

import Welcome from './welcome/welcome';
import Greeting from './greeting/greeting';
import Rules from './rules/rules';
import Level from './level/level';

const ControllerID = {
  WELCOME: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);

class Application {
  constructor() {
    this.routes = {
      [ControllerID.WELCOME]: Welcome,
      [ControllerID.GREETING]: Greeting,
      [ControllerID.RULES]: Rules,
      [ControllerID.GAME]: Level
    }

  window.onhashchange = () => {
    this.changeController(getControllerIDFromHash(location.hash));
   }
  }

  changeController(route = ``) {
    const Controller = this.routes[route];
    new Controller().init();
  }

  init() {
    this.changeController(getControllerIDFromHash(location.hash));
  }

  showWelcome() {
    location.hash = ControllerID.WELCOME;

    /*addElement(introElement, transitionRules);
    document.body.appendChild(footerElement);*/
  }

  showGreeting() {
    location.hash = ControllerID.GREETING;
  //  addElement(greetingElement, transitionGo);
  //  greetingElement.init();
  }

  showRules() {
    location.hash = ControllerID.RULES;
    //rulesElement.init();
    //addElement(rulesElement, transitionGameOne);
  }

  showGame() {
    location.hash = ControllerID.GAME;
    //newGameScreen.init();
    //addElement(greetingElement, transitionGo);
  }

  static showStats(state) {
    //statsScreen.init(stats);
    addElement(statsElement(state), transitionPrevPage);
  }

}

const application = new Application();
application.init();

export default application;
