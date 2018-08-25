import getElementFromTemplate from './getElementFromTemplate';
import addElement from './addElement';
import introElement from './intro';

addElement(introElement);

/*
const templates = document.querySelectorAll(`template`);
const container = document.querySelector(`.central`);
const content = container.innerHTML;

const getElementFromTemplateNum = (templateNum) => {
  container.innerHTML = templates[templateNum].innerHTML;
  return container;
}

getElementFromTemplateNum(0);

document.onkeydown = (evt) => {
  if(evt.altKey && evt.key === `ArrowLeft`) {
    evt.preventDefault();
    getElementFromTemplateNum(0);
  }
  if(evt.altKey && evt.key === `ArrowRight`) {
    getElementFromTemplateNum(1);
  }
}
*/
