import getElementFromTemplate from './getElementFromTemplate';
import addElement from './addElement';
import greetingElement from './greeting';
import {transitionGo} from './greeting';

const introElement = getElementFromTemplate(`
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
`);

export default introElement;

export function transitionRules() {
  const button = document.querySelector(`.intro__asterisk`);
  button.onclick = () => {
    addElement(greetingElement, transitionGo);
  };
}
