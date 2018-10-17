export const fetch = window.fetch(`https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`)
  .then(function(response) {
    if(response.status === 200) {
      console.log(response.json());
    } else {
      throw new Error (`Ошибка соединения!`);
    }
  });


export const Result = {
  PAINT: `paint`,
  PHOTO: `photo`
};
/*
const Questions = [
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
];*/
const Questions1 = [
  {
    src: `https://k41.kn3.net/CF684A85A.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k42.kn3.net/D2F0370D6.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k42.kn3.net/CF42609C8.jpg`,
    answer: Result.PAINT
  },
  {
    src: `http://i.imgur.com/jBLSxQ9.png`,
    answer: Result.PHOTO
  },
  {
    src: `https://i.redd.it/l08jq66vul2y.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `http://i.imgur.com/1KegWPz.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `http://i.imgur.com/mz0MSsy.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `https://k37.kn3.net/47F2604E3.jpg`,
    answer: Result.PAINT
  },
  {
    src: `http://i.imgur.com/q7rBB8Y.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `http://i.imgur.com/gUeK0qE.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `http://i.imgur.com/Gvq3jc2.jpg`,
    answer: Result.PHOTO
  }
];

Array.prototype.shuffle = function() {
  let m = this.length, i;
  while (m) {
    i = (Math.random() * m--) >>> 0;
    [this[m], this[i]] = [this[i], this[m]]
  }
  return this;
};

const Questions2 = [
  {
    src: `https://k36.kn3.net/E9B401148.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k42.kn3.net/D660F0768.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://i.redd.it/bj70zjl196kx.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `https://k35.kn3.net/2B925F44D.jpg`,
    answer: Result.PAINT
  },
  {
    src: `http://i.imgur.com/dWTKNtv.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `https://k36.kn3.net/1619797DF.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://i.imgur.com/DiHM5Zb.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `https://k41.kn3.net/FF5009BF0.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `http://i.imgur.com/GbcYNPw.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `https://k38.kn3.net/20B8A2B58.jpg`,
    answer: Result.PAINT
  },
  {
    src: `http://i.imgur.com/jP4C1IS.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `https://k37.kn3.net/695A61B3C.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k42.kn3.net/F588C1419.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k32.kn3.net/5C7060EC5.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k40.kn3.net/6A7A24F7C.jpg`,
    answer: Result.PAINT
  }
].shuffle();


const Questions3pt = [
  {
    src: `https://k37.kn3.net/0F4598844.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k35.kn3.net/9ACD0AC56.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k43.kn3.net/1C4F7F5D5.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k31.kn3.net/4BF6BBF0E.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k34.kn3.net/4244FE50B.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k36.kn3.net/E9B401148.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k37.kn3.net/695A61B3C.jpg`,
    answer: Result.PAINT
  },
  {
    src: `https://k39.kn3.net/B27A12A74.jpg`,
    answer: Result.PAINT
  }
].shuffle();

const Questions3ph = [
  {
    src: `http://i.imgur.com/DKR1HtB.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `https://i.imgur.com/NXlVX48.png`,
    answer: Result.PHOTO
  },
  {
    src: `https://i.redd.it/0uvt7jy0hy2y.jpg`,
    answer: Result.PHOTO
  },
   {
    src: `http://i.imgur.com/zHRZW1C.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `http://i.imgur.com/Jvzh3pk.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `https://i.imgur.com/DiHM5Zb.jpg`,
    answer: Result.PHOTO
  },
  {
    src: `http://i.imgur.com/mz0MSsy.jpg`,
    answer: Result.PHOTO
  }
].shuffle();

let rand1 = Math.floor(Math.random() * Questions1.length);

export const game = Object.freeze([
  {
    type: 'two-pic',
    title: `Угадайте для каждого изображения фото или рисунок?`,
    imgOne: Questions2[0],
    imgTwo: Questions2[1]
  },
  {
    type: 'one-pic',
    title: `Угадай, фото или рисунок?`,
    imgOne: Questions1[rand1]
  },
  {
    type: 'three-pic',
    title: `Найдите фото среди изображений`,
    imgOne: Questions3pt[0],
    imgTwo: Questions3pt[1],
    imgThree: Questions3ph[0]
  },
  {
    type: 'two-pic',
    title: `Угадайте для каждого изображения фото или рисунок?`,
    imgOne: Questions2[2],
    imgTwo: Questions2[3]
  },
  {
    type: 'one-pic',
    title: `Угадай, фото или рисунок?`,
    imgOne: Questions1[1]
  },
  {
    type: 'three-pic',
    title: `Найдите рисунок среди изображений`,
    imgOne: Questions3ph[1],
    imgTwo: Questions3pt[2],
    imgThree: Questions3ph[2]
  },
  {
    type: 'two-pic',
    title: `Угадайте для каждого изображения фото или рисунок?`,
    imgOne: Questions2[4],
    imgTwo: Questions2[5]
  },
  {
    type: 'one-pic',
    title: `Угадай, фото или рисунок?`,
    imgOne: Questions1[rand1]
  },
  {
    type: 'three-pic',
    title: `Найдите рисунок среди изображений`,
    imgOne: Questions3pt[3],
    imgTwo: Questions3ph[4],
    imgThree: Questions3ph[5]
  },
  {
    type: 'two-pic',
    title: `Угадайте для каждого изображения фото или рисунок?`,
    imgOne: Questions2[6],
    imgTwo: Questions2[7]
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
  userAnswers: Array(10).fill(Stats.UNKNOWN)
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




