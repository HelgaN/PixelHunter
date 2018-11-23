import GamePresenter from './../game/game';
import {currentState, types, game} from './../data/game';

const headerGame = (state) => `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    <h1 class="game__timer">${state.time}</h1>
    <div class="game__lives">
      ${new Array(3 - state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      ${new Array(state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    </div>
  </header>`;

const gameTwoState = (state) => `<p class="game__task">${state.question}<!--Угадайте для каждого изображения фото или рисунок?--></p>
    <form class="game__content">
      <div class="game__option">
      <!--http://placehold.it/468x458 -->
        <img src="${state.imgOneUrl}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
      <!--http://placehold.it/468x458 -->
        <img src="${state.imgTwoUrl}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;

const gameOneState = (state) => `<p class="game__task">${state.question}<!--Угадай, фото или рисунок?--></p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
      <!-- http://placehold.it/705x455-->
        <img src="${state.imgOneUrl}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;

const gameThreeState = (state) => `<p class="game__task">${state.question}<!--Найдите рисунок среди изображений--></p>
    <form class="game__content  game__content--triple">
    <!-- http://placehold.it/304x455-->
      <div class="game__option">
        <img src="${state.imgOneUrl}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${state.imgTwoUrl}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${state.imgThreeUrl}" alt="Option 1" width="304" height="455">
      </div>
    </form>`;
/*
const stats = (statsData) => `<div class="stats">${console.log(statsData.userAnswers)}
  <ul class="stats">
    ${new Array(statsData.userAnswers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
  </ul>
</div>`;*/

const stats = (statsData) => `<div class="stats">
  <ul class="stats">
    ${statsData.userAnswers.map((item, i) => {
      return `<li class="stats__result stats__result--${statsData.userAnswers[i]}"></li>`
    })}
  </ul>
</div>`;

export default class LevelView extends GamePresenter {
  constructor(state, data) {
    super();
    this.state = state;
    this.data = data;
  }

  newScreenHandlerTypeTwo() {
    this.transitionPrevPage();
    let timer = this.timer();
    const setNextLevel = this.countQuestions;
    const setTime = setTimeout(() => {
      this.handlingAnInvalidResponse();
      setNextLevel(this.state);
      this.onStart();
    }, 31000);

    const inputs = document.querySelectorAll(`input`);

    inputs.forEach((input) => {
      input.addEventListener(`change`, () => {
        let inputsSelected = document.querySelectorAll(`input:checked`);
        if (inputsSelected.length === 2) {
          const time = document.querySelector('.game__timer').textContent;
          clearInterval(timer);
          clearInterval(setTime);
          this.checkTheAnswerOfTypeTwo(this.data, time, this.state);
          setNextLevel(this.state);
          this.onStart();
          inputsSelected[0].checked = false;
          inputsSelected[1].checked = false;
        }
      });
    });
}

newScreenHandlerTypeOne() {
  this.transitionPrevPage();
  let timer = this.timer();
  const setNextLevel = this.countQuestions;
  const setTime = setTimeout(() => {
    this.handlingAnInvalidResponse();
    setNextLevel(this.state);
    this.onStart();
  }, 31000);

  const inputs = document.querySelectorAll(`input`);
  inputs.forEach((input) => {
    input.addEventListener(`change`, () => {
      const time = document.querySelector('.game__timer').textContent;
      clearInterval(timer);
      clearInterval(setTime);
      this.checkTheAnswerOfTypeOne(this.data, time, this.state);
      setNextLevel(this.state);
      this.onStart();
      input.checked = false;
    });
  });
};

newScreenHandlerTypeThree() {
  this.transitionPrevPage();
  let timer = this.timer();
  const setNextLevel = this.countQuestions;
  const setTime = setTimeout(() => {
    this.handlingAnInvalidResponse();
    setNextLevel(this.state);
    this.onStart();
  }, 31000);

  const imgs = document.querySelectorAll(`.game__option`);

  imgs.forEach((img) => {
    img.addEventListener(`click`, (evt) => {
      const time = document.querySelector('.game__timer').textContent;
      clearInterval(timer);
      clearInterval(setTime);
      this.checkTheAnswerOfTypeThree(evt, this.data, time, this.state);
      setNextLevel(this.state);
      this.onStart();
    });
  });

}

  get template() {
    let question = this.data[this.state.numberOfQuestions];
    console.log(question);
    let thisLevelType = question.type;
    let levelType;

    switch (thisLevelType) {
      case types.ONE:
        levelType = gameOneState(question);
        break;
      case types.TWO:
        levelType = gameTwoState(question);
        break;
      case types.THREE:
        levelType = gameThreeState(question);
        break;
      default:
      }
    let level = `${headerGame(this.state)}
      <div class="game">
        ${levelType}
        ${stats(this.state)}
      </div>`;

   return level;
  }

  get handler() {
    let question = this.data[this.state.numberOfQuestions];
    let thisLevelType = question.type;
    let handler;

    switch (thisLevelType) {
      case types.ONE:
        handler = this.newScreenHandlerTypeOne;
        break;
      case types.TWO:
        handler = this.newScreenHandlerTypeTwo;
        break;
      case types.THREE:
        handler = this.newScreenHandlerTypeThree;
        break;
      default:
      }
   return handler;
  }

  onStart() {

  }

}
