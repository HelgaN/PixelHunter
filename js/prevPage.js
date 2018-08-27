import addElement from './addElement';
import greetingElement from './greeting';
import {transitionGo} from './greeting';

export function transitionPrevPage() {
  const backButton = document.querySelector(`.back`);

  backButton.onclick = () => {
    addElement(greetingElement, transitionGo);
  }
};


