import footerElement from './screen/footer';
import {addElement} from './util';
import {transitionRules, transitionGo, transitionPrevPage} from './handlers/handlers';
import {currentState} from './data/game';

import Welcome from './welcome/welcome';
import Greeting from './greeting/greeting';
import Rules from './rules/rules';
import Level from './level/level';
import Stats from './stats/stats';

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
      [ControllerID.GAME]: Level,
      [ControllerID.STATS]: Stats
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

  showStats(state) {
    location.hash = ControllerID.STATS;
    //statsScreen.init(stats);
    //addElement(statsElement(state), transitionPrevPage);
  }

}

const application = new Application();
application.init();

export default application;
