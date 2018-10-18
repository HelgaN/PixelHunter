export  function updateLives (state) {
  const div = document.querySelector(`.game__lives`);
  div.innerHTML = ``;
  div.innerHTML = `
   ${new Array(3 - state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      ${new Array(state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}`;
  return div;
}
