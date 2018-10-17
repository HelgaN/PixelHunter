import {addElement} from './util';
import {transitionGo} from './handlers/handlers';
import greetingElement from './screen/greeting-screen';

export function transitionPrevPage() {
  const backButton = document.querySelector(`.back`);

  backButton.onclick = () => {
    addElement(greetingElement, transitionGo);
  };
}
