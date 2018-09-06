import {currentState} from './data/game.js'
export function analyzeTheSpeedOfAnswer (time) {
  if (time < 10) {
    currentState.userAnswers.push(`true-slow-answer`);
  } else if (time > 20) {
    currentState.userAnswers.push(`true-quick-answer`);
  } else {
    currentState.userAnswers.push(`true-answer`);
  }
}
