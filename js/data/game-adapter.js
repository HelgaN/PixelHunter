import {DefaultAdapter} from './../model';

export default new class extends DefaultAdapter {

  preprocess(data) {
    let dataArray = [];
    data.forEach((item, i) => {
      switch (item.type) {
        case `tinder-like`:
          item.imgOneUrl = item.answers[0].image.url;
          item.imgOneWidth = item.answers[0].image.width;
          item.imgOneHeight = item.answers[0].image.height;
          item.imgOneAnswer = item.answers[0].type;
          delete item.answers;
          break;
        case `two-of-two`:
          item.imgOneUrl = item.answers[0].image.url;
          item.imgOneWidth = item.answers[0].image.width;
          item.imgOneHeight = item.answers[0].image.height;
          item.imgOneAnswer = item.answers[0].type;
          item.imgTwoUrl = item.answers[1].image.url;
          item.imgTwoWidth = item.answers[1].image.width;
          item.imgTwoHeight = item.answers[1].image.height;
          item.imgTwoAnswer = item.answers[1].type;
          delete item.answers;
          break;
        case `one-of-three`:
          item.imgOneUrl = item.answers[0].image.url;
          item.imgOneWidth = item.answers[0].image.width;
          item.imgOneHeight = item.answers[0].image.height;
          item.imgOneAnswer = item.answers[0].type;
          item.imgTwoUrl = item.answers[1].image.url;
          item.imgTwoWidth = item.answers[1].image.width;
          item.imgTwoHeight = item.answers[1].image.height;
          item.imgTwoAnswer = item.answers[1].type;
          item.imgThreeUrl = item.answers[2].image.url;
          item.imgThreeWidth = item.answers[2].image.width;
          item.imgThreeHeight = item.answers[2].image.height;
          item.imgThreeAnswer = item.answers[2].type;
          delete item.answers;
          break;
        default:
        }
    });
    dataArray = data;

    return dataArray;
  }

  toServer(data) {
    return JSON.stringify(data);
  }
}
