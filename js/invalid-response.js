import {currentState} from './data/game.js';
import {transitionPrevPage} from './prevPage';
import addElement from './addElement';
import statsElement from './stats';

export function handlingAnInvalidResponse() {
  currentState.userAnswers[currentState.numberOfQuestions - 1] = `wrong`;
  (currentState.lives > 0) ? currentState.lives -= 1 : currentState.lives;
  return currentState.lives;
}
