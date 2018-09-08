export const Result = {
  PAINT: `paint`,
  PHOTO: `photo`
};

export const Questions = [
  {
    src: `https://k42.kn3.net/CF42609C8.jpg`,
    answer: Result.PAINT
  },
  {
    src: `http://i.imgur.com/1KegWPz.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `https://k42.kn3.net/D2F0370D6.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `https://i.imgur.com/DiHM5Zb.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k32.kn3.net/5C7060EC5.jpg`,
    answer: Result.PAINT
  },
  {
    src: `http://i.imgur.com/DKR1HtB.jpg`,
    answer: Result.PHOTO
  }
];

export const game = Object.freeze([
  {
    type: 'two-pic',
    title: `Угадайте для каждого изображения фото или рисунок?`,
    imgOne: Questions[0],
    imgTwo: Questions[1]
  },
  {
    type: 'one-pic',
    title: `Угадай, фото или рисунок?`,
    imgOne: Questions[2]
  },
  {
    type: 'three-pic',
    title: `Найдите рисунок среди изображений`,
    imgOne: Questions[3],
    imgTwo: Questions[4],
    imgThree: Questions[5]
  },
  {
    type: 'two-pic',
    title: `Угадайте для каждого изображения фото или рисунок?`,
    imgOne: Questions[5],
    imgTwo: Questions[4]
  },
  {
    type: 'one-pic',
    title: `Угадай, фото или рисунок?`,
    imgOne: Questions[0],
    userAnswer: `unknow`
  },
  {
    type: 'three-pic',
    title: `Найдите рисунок среди изображений`,
    imgOne: Questions[1],
    imgTwo: Questions[2],
    imgThree: Questions[3]
  },
  {
    type: 'two-pic',
    title: `Угадайте для каждого изображения фото или рисунок?`,
    imgOne: Questions[0],
    imgTwo: Questions[5]
  },
  {
    type: 'one-pic',
    title: `Угадай, фото или рисунок?`,
    imgOne: Questions[2]
  },
  {
    type: 'three-pic',
    title: `Найдите рисунок среди изображений`,
    imgOne: Questions[1],
    imgTwo: Questions[3],
    imgThree: Questions[4]
  },
  {
    type: 'two-pic',
    title: `Угадайте для каждого изображения фото или рисунок?`,
    imgOne: Questions[2],
    imgTwo: Questions[5]
  }
]);

export const Stats = {
  WRONG: `wrong`,
  SLOW: `slow`,
  FAST: `fast`,
  CORRECT: `correct`,
  UNKNOWN: `unknown`
}

const initialState = Object.freeze({
  level: game[0],
  lives: 3,
  time: 30,
  numberOfQuestions: 0,
  userAnswers: /*new Array()*/Array(10).fill(Stats.UNKNOWN)
});

export const currentState = Object.assign({}, initialState);

export default initialState;



/*
export const game = Object.freeze({
  'two-pic': {
    title: `Угадайте для каждого изображения фото или рисунок?`,
    imgOne: Questions[0],
    imgTwo: Questions[1]
  },
  'one-pic': {
    title: `Угадай, фото или рисунок?`,
    imgOne: Questions[2]
  },
  'three-pic': {
    title: `Найдите рисунок среди изображений`,
    imgOne: Questions[3],
    imgTwo: Questions[4],
    imgThree: Questions[5]
  }
});*/


export function setLives (game, lives) {
  if (lives < 0) {
    throw new RangeError(`Can't set negative lives`);
  }
  const newGame = Object.assign({}, game);
  newGame.lives = lives;
  return newGame;
}

export function countQuestions (game) {
  game.numberOfQuestions++;
  return game;
}




