import introElement from './screen/intro-screen';
import greetingElement from './screen/greeting-screen';
import rulesElement from './screen/rules-screen';
import {addElement} from './util';
import {transitionRules} from './handlers/handlers';

export default class Application {
  static showIntro() {
    addElement(introElement, transitionRules);
  }

  static showGreeting() {
  //  addElement(greetingElement, transitionGo);
  //  greetingElement.init();
  }

  static showRules() {
    //rulesElement.init();
    //addElement(rulesElement, transitionGameOne);
  }

}