import {DefaultAdapter} from './../model';

export default new class extends DefaultAdapter {

  preprocess(data) {
    let dataArray = [];
    data.forEach((item, i) => {
      switch (item.type) {
        case `tinder-like`:
          item.imgOne = item.answers[0].image.url;
          item.imgOneWidth = item.answers[0].image.width;
          item.imgOneHeight = item.answers[0].image.height;
          delete item.answers;
          break;
        case `two-of-two`:
          item.imgOne = item.answers[0].image.url;
          item.imgOneWidth = item.answers[0].image.width;
          item.imgOneHeight = item.answers[0].image.height;
          item.imgTwo = item.answers[1].image.url;
          item.imgTwoWidth = item.answers[1].image.width;
          item.imgTwoHeight = item.answers[1].image.height;
          delete item.answers;
          break;
        case `one-of-thre`:
          item.imgOne = item.answers[0].image.url;
          item.imgOneWidth = item.answers[0].image.width;
          item.imgOneHeight = item.answers[0].image.height;
          item.imgTwo = item.answers[1].image.url;
          item.imgTwoWidth = item.answers[1].image.width;
          item.imgTwoHeight = item.answers[1].image.height;
          item.imgThree = item.answers[2].image.url;
          item.imgThreeWidth = item.answers[2].image.width;
          item.imgThreeHeight = item.answers[2].image.height;
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
