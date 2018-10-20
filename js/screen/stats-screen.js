import {getElementFromTemplate} from './../util';
import GamePresenter from './../game/game';
import currentState from './../data/game';

const presenter = new GamePresenter(currentState);

const header = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>`;

const victory = (state) => `<td class="result__points">×&nbsp;100</td>
        <td class="result__total">${presenter.calculateRightAnswers(state)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${presenter.calculateQuickAnswers(state)}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${presenter.calculateQuickAnswersPoints(state)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${presenter.calculateLivesBonus(state)}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${presenter.calculateLivesBonusPoints(state)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${presenter.calculateSlowAnswers(state)}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${presenter.calculateSlowAnswersPoints(state)}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${presenter.calculateTotalPoints(state)}</td>
`;

const loss = `<td class="result__total"></td>
  <td class="result__total  result__total--final">fail</td>`;



const statsElement = (state) => getElementFromTemplate(`
  ${header}
  <div class="result">
    <h1>${presenter.assessTheSuccess(state)}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            ${new Array(10).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
          </ul>
        </td>
        ${(presenter.assessTheSuccess(state) == `Победа!`) ? victory(state) : loss}
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
`);

export default statsElement;
