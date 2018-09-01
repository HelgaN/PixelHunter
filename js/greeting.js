import getElementFromTemplate from './getElementFromTemplate';
import addElement from './addElement';
import rulesElement from './rules';
import {transitionGameOne} from './rules';

const logo = `<img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter">`;

const title = `<h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>`;

const rules = `<p>Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.</p>`;

const greetingElement = getElementFromTemplate(`
  <div class="greeting central--blur">
    <div class="greeting__logo">${logo}</div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      ${title}
      ${rules}
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>
`);

export function transitionGo() {
  const button = document.querySelector(`.greeting__continue`);
  button.onclick = () => addElement(rulesElement, transitionGameOne);
}

export default greetingElement;
