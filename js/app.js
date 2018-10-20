import introElement from './screen/intro-screen';
import greetingElement from './screen/greeting-screen';
import rulesElement from './screen/rules-screen';
import footerElement from './screen/footer';
import {addElement} from './util';
import {transitionRules, transitionGo, transitionPrevPage} from './handlers/handlers';
import {currentState} from './data/game';
import statsElement from './screen/stats-screen';

export default class Application {
  static showWelcom() {
    addElement(introElement, transitionRules);
    document.body.appendChild(footerElement);
  }
/*
  static showGreeting() {
  //  addElement(greetingElement, transitionGo);
  //  greetingElement.init();
  }

  static showRules() {
    //rulesElement.init();
    //addElement(rulesElement, transitionGameOne);
  }
*/
  static showGame() {
    //newGameScreen.init();
    addElement(greetingElement, transitionGo);
  }

  static showStats(state) {
    //statsScreen.init(stats);
    addElement(statsElement(state), transitionPrevPage);
  }

}
