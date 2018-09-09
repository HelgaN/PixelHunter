export function assessTheSuccess (state) {
  const userAnswers = (state.userAnswers).filter((answer) => {
    if(answer !== `unknown` && state.lives != 0) return answer;
  });
  let result;
  if (userAnswers.length == state.userAnswers.length) {
    return result = `Победа!`;
  }

  return result = `Поражение!`;
}

export function calculateRightAnswers (state) {
  const userAnswers = (state.userAnswers).filter((answer) => {
    if(answer !== `unknown` && answer !== `wrong`) return answer;
  });
  return userAnswers.length * 100;
}

export function calculateQuickAnswers (state) {
  const userAnswers = (state.userAnswers).filter((answer) => {
    if(answer === `fast`) return answer;
  });
  return userAnswers.length;
}

export function calculateQuickAnswersPoints (state) {
  const userAnswers = (state.userAnswers).filter((answer) => {
    if(answer === `fast`) return answer;
  });
  return userAnswers.length * 50;
}

export function calculateLivesBonus (state) {
  return state.lives;
}

export function calculateLivesBonusPoints (state) {
  return state.lives * 50;
}

export function calculateSlowAnswers (state) {
  const userAnswers = (state.userAnswers).filter((answer) => {
    if(answer === `slow`) return answer;
  });
  return userAnswers.length;
}

export function calculateSlowAnswersPoints (state) {
  const userAnswers = (state.userAnswers).filter((answer) => {
    if(answer === `slow`) return answer;
  });
  return userAnswers.length * (-50);
}

export function calculateTotalPoints (state) {
  const right = calculateRightAnswers(state);
  const quick = calculateQuickAnswersPoints(state);
  const live = calculateLivesBonusPoints(state);
  const slow = calculateSlowAnswersPoints(state);

  return right + quick + live + slow;
}
