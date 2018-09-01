const initialState = Object.freeze({
  level: `two-pic`,
  lives: 2,
  time: `NN`,
  title: `Угадайте для каждого изображения фото или рисунок?`,
  imgOne: {
    src: `https://k42.kn3.net/CF42609C8.jpg`,
    answer: `paint`
  },
  imgTwo: {
    src: `http://i.imgur.com/1KegWPz.jpg`,
    answer: `photo`
  },
  stats: ``
});

export default initialState;
/*
const game = {
  type: new Set([`two-pic`, `one-pic`, `three-pic`]),
  questionsList: new Array([`Угадайте для каждого изображения фото или рисунок?`, `Угадай, фото или рисунок?`, `Найдите рисунок среди изображений`]),
  stats: new Array(10)
}

const question = {
  title: `Угадайте для каждого изображения фото или рисунок?`,
  answers: new Set ([`photo`, `paint`])
}

const answer = {
  result: null,
  answerSrc: null
}
*/
export const questions = Object.freeze({
  'two-pic': {
    title: `Угадайте для каждого изображения фото или рисунок?`,
    imgOne: {
      src: `https://k42.kn3.net/CF42609C8.jpg`,
      answer: `paint`
    },
    imgTwo: {
      src: `http://i.imgur.com/1KegWPz.jpg`,
      answer: `photo`
    }
   },
  'one-pic': {
    title: `Угадай, фото или рисунок?`,
    imgOne: {
      src: `https://k42.kn3.net/D2F0370D6.jpg`,
      answer: `photo`
    }
  },
  'three-pic': {
    title: `Найдите рисунок среди изображений`,
    imgOne: {
      src: `https://i.imgur.com/DiHM5Zb.jpg`,
      answer: `paint`
    },
    imgTwo: {
      src: `https://k32.kn3.net/5C7060EC5.jpg`,
      answer: `paint`
    },
    imgThree: {
      src: `http://i.imgur.com/DKR1HtB.jpg`,
      answer: `photo`
    }
  }
});



