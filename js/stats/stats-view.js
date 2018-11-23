import GamePresenter from './../game/game';
import {currentState} from './../data/game';

const header = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>`;

  const loss = `<td class="result__total"></td>
    <td class="result__total  result__total--final">fail</td>`;


    export default class statsView extends GamePresenter {
      constructor(state = currentState) {
          super();
          this.state = state;
      }

      get template() {
        console.log(`${this.state.userAnswers} STATS`)
        const victory = (state) => `<td class="result__points">×&nbsp;100</td>
                <td class="result__total">${this.calculateRightAnswers(state)}</td>
              </tr>
              <tr>
                <td></td>
                <td class="result__extra">Бонус за скорость:</td>
                <td class="result__extra">${this.calculateQuickAnswers(state)}&nbsp;<span class="stats__result stats__result--fast"></span></td>
                <td class="result__points">×&nbsp;50</td>
                <td class="result__total">${this.calculateQuickAnswersPoints(state)}</td>
              </tr>
              <tr>
                <td></td>
                <td class="result__extra">Бонус за жизни:</td>
                <td class="result__extra">${this.calculateLivesBonus(state)}&nbsp;<span class="stats__result stats__result--alive"></span></td>
                <td class="result__points">×&nbsp;50</td>
                <td class="result__total">${this.calculateLivesBonusPoints(state)}</td>
              </tr>
              <tr>
                <td></td>
                <td class="result__extra">Штраф за медлительность:</td>
                <td class="result__extra">${this.calculateSlowAnswers(state)}&nbsp;<span class="stats__result stats__result--slow"></span></td>
                <td class="result__points">×&nbsp;50</td>
                <td class="result__total">${this.calculateSlowAnswersPoints(state)}</td>
              </tr>
              <tr>
                <td colspan="5" class="result__total  result__total--final">${this.calculateTotalPoints(state)}</td>
        `;

        const stats = `
          ${header}
          <div class="result">
            <h1>${this.assessTheSuccess(this.state)}</h1>
            <table class="result__table">
              <tr>
                <td class="result__number">1.</td>
                <td colspan="2">
                  <ul class="stats">
                    ${this.state.userAnswers.map((item, i) => `<li class="stats__result stats__result--${item}"></li>` )}
                  </ul>
                </td>
                ${(this.assessTheSuccess(this.state) == `Победа!`) ? victory(this.state) : loss}
               </tr>
            </table>
            <table class="result__table">
              <tr>
                <td class="result__number">2.</td>
                <td>
                  <ul class="stats">
                    <li class="stats__result stats__result--wrong"></li>
                    <li class="stats__result stats__result--slow"></li>
                    <li class="stats__result stats__result--fast"></li>
                    <li class="stats__result stats__result--correct"></li>
                    <li class="stats__result stats__result--wrong"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--slow"></li>
                    <li class="stats__result stats__result--wrong"></li>
                    <li class="stats__result stats__result--fast"></li>
                    <li class="stats__result stats__result--wrong"></li>
                  </ul>
                </td>
                <td class="result__total"></td>
                <td class="result__total  result__total--final">fail</td>
              </tr>
            </table>
            <table class="result__table">
              <tr>
                <td class="result__number">3.</td>
                <td colspan="2">
                  <ul class="stats">
                    <li class="stats__result stats__result--wrong"></li>
                    <li class="stats__result stats__result--slow"></li>
                    <li class="stats__result stats__result--fast"></li>
                    <li class="stats__result stats__result--correct"></li>
                    <li class="stats__result stats__result--wrong"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--slow"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--fast"></li>
                    <li class="stats__result stats__result--unknown"></li>
                  </ul>
                </td>
                <td class="result__points">×&nbsp;100</td>
                <td class="result__total">900</td>
              </tr>
              <tr>
                <td></td>
                <td class="result__extra">Бонус за жизни:</td>
                <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
                <td class="result__points">×&nbsp;50</td>
                <td class="result__total">100</td>
              </tr>
              <tr>
                <td colspan="5" class="result__total  result__total--final">950</td>
              </tr>
            </table>
          </div>
        `;

        return stats;
      }

      newScreenHandler() {
        this.transitionPrevPage();
      }

      onStart() {

      }

    }
