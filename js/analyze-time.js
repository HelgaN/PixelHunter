import {currentState} from './data/game.js';
export function analyzeTheSpeedOfAnswer (time) {
  if (time < 10) {
    currentState.userAnswers[currentState.numberOfQuestions - 1]= `slow`;
  } else if (time > 20) {
    currentState.userAnswers[currentState.numberOfQuestions - 1] = `fast`;
  } else {
    currentState.userAnswers[currentState.numberOfQuestions - 1] = `correct`;
  }
}
