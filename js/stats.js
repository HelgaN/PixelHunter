import getElementFromTemplate from './getElementFromTemplate';
import {Stats} from './data/game.js';
import {updateStats} from './stats-element';
import {assessTheSuccess, calculateRightAnswers, calculateQuickAnswers, calculateQuickAnswersPoints, calculateLivesBonus, calculateLivesBonusPoints, calculateSlowAnswers, calculateSlowAnswersPoints, calculateTotalPoints} from './calculate-stats';
import {currentState} from './data/game.js';

const header = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>`;

const victory = (state) => `<td class="result__points">×&nbsp;100</td>
        <td class="result__total">${calculateRightAnswers(state)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${calculateQuickAnswers(state)}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${calculateQuickAnswersPoints(state)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${calculateLivesBonus(state)}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${calculateLivesBonusPoints(state)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${calculateSlowAnswers(state)}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${calculateSlowAnswersPoints(state)}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${calculateTotalPoints(state)}</td>      
`;

const loss = `<td class="result__total"></td>
  <td class="result__total  result__total--final">fail</td>`;



const statsElement = (state) => getElementFromTemplate(`
  ${header}
  <div class="result">
    <h1>${assessTheSuccess(currentState)}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            ${new Array(10).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}            
          </ul>
        </td>
        ${(assessTheSuccess(currentState) == `Победа!`) ? victory(currentState) : loss} 
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
