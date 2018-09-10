import {currentState} from './data/game.js';
export function analyzeTheSpeedOfAnswer (time) {
  if (time < 10) {
    return `slow`;
  } else if (time > 20) {
    return `fast`;
  } else {
    return `correct`;
  }
}
