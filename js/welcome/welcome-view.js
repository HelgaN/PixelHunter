import GamePresenter from './../game/game';
import application from './../app';

export default class WelcomeView extends GamePresenter {
  get template() {
    return `<div id="main" class="central__content">
        <div id="intro" class="intro">
          <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div>
      </div>`.trim();
  }

  newScreenHandler() {
    const button = document.querySelector(`.intro__asterisk`);
    button.onclick = () => {
      console.log(`qack!`);
      /*addElement(greetingElement, transitionGo);*/this.onStart();
    };
  }

  onStart() {

  }
}
