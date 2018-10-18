export function updateStats (state) {
  const elements = document.querySelectorAll(`.stats__result`);
  elements.forEach(function (el, i) {
    el.classList.remove(`stats__result--unknown`);
    el.classList.add(`stats__result--${state.userAnswers[i]}`);
  });
};

const stats = (statsData) => `<div class="stats">
  <ul class="stats">
     ${new Array(statsData.userAnswers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
  </ul>
</div>`;

export default stats;
