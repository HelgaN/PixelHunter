export class DefaultAdapter {
  constructor() {
    if(new.target === DefaultAdapter) {
      throw new Error();
    }
  }

  preprocess(data) {  // преобразовать данные для клиента
    return data;
  }

  toServer(data) {   // преобразовать данные для сервера
    return data;
  }
}

const defaultAdapter = new class extends DefaultAdapter {} ();

export default class Model {
  get urlRead() {
    throw new Error(`Define the URL for the model`);
  }

  get urlWrite() {
    throw new Error(`Define the URL for the model`);
  }

  load(adapter = defaultAdapter) {
    return fetch(this.urlRead)
      .then((response) => response.json());

  }

  send() {

  }
}
