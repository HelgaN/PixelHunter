const initialState = Object.freeze({
  level: `two-pic`,
  lives: 3,
  time: 30
});

export default initialState;

export const Result = {
  PAINT: `paint`,
  PHOTO: `photo`
};

export const Stats = {
  WRONG: `wrong`,
  SLOW: `slow`,
  FAST: `fast`,
  CORRECT: `correct`,
  UNKNOWN: `unknown`
}

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
});



