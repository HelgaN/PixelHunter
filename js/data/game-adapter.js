import DefaultAdapter from './../model';

export default new class extends DefaultAdapter {

  preprocess(data) {
    const dataArray = data.forEach((item, i) => {
      switch (data.item.type) {
        case `tinder-like`:
          item.imgOne = item.answers[0];
          break;
        case `two-of-two`:
          item.imgOne = item.answers[0];
          item.imgTwo = item.answers[1];
          break;
        case `one-of-thre`:
          item.imgOne = item.answers[0];
          item.imgTwo = item.answers[1];
          item.imgThree = item.answers[2];
          break;
        default:
        }
    });

    return dataArray;
  }

  toServer(data) {
    return JSON.stringify(data);
  }
}
