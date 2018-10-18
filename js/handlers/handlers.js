import {addElement} from './../util';
import greetingElement from './../screen/greeting-screen';
import rulesElement from './../screen/rules-screen';

import {transitionPrevPage} from './../prevPage';
import {questionOne} from './../screen/game-1-screen';
import {transitionGameTwo} from './../game-1';


// intro - greeting

export function transitionRules() {
  const button = document.querySelector(`.intro__asterisk`);
  button.onclick = () => {
    addElement(greetingElement, transitionGo);
  };
};

// greeting - rules

export function transitionGo() {
  const button = document.querySelector(`.greeting__continue`);
  button.onclick = () => addElement(rulesElement, transitionGameOne);
};

// rules - game
// started some kind of hell !!

const inputChange = (input, button) => {
  if (input.value !== ``) {
    button.disabled = false;
    button.onclick = () => addElement(questionOne, transitionGameTwo);
  } else {
    button.disabled = true;
  }
};

export function transitionGameOne() {
  transitionPrevPage();
  const input = document.querySelector(`.rules__input`);
  const button = document.querySelector(`.rules__button`);
  input.onchange = () => inputChange(input, button);
}
