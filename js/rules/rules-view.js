import GamePresenter from './../game/game';

const header = `  <header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>`;

const gameRules = `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>`;

const form = `<form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>`;

export default class RulesView extends GamePresenter {
  get template() {
    const rules = `
      ${header}
      <div class="rules">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">
          ${gameRules}
          <br>
          Готовы?
        </p>
        ${form}
      </div>
    `;
    return rules;
  }

  newScreenHandler() {
    const inputChange = (input, button) => {
      if (input.value !== ``) {
        button.disabled = false;
        button.onclick = () => this.onStart();
      } else {
        button.disabled = true;
      }
    };

      this.transitionPrevPage();
      const input = document.querySelector(`.rules__input`);
      const button = document.querySelector(`.rules__button`);
      input.onchange = () => inputChange(input, button);
  }

  onStart() {

  }


}
