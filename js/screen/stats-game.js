const stats = (statsData) => `<div class="stats">
  <ul class="stats">
     ${new Array(statsData.userAnswers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
  </ul>
</div>`;

export default stats;
