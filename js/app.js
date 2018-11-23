import Welcome from './welcome/welcome';
import Greeting from './greeting/greeting';
import Rules from './rules/rules';
import Level from './level/level';
import Stats from './stats/stats';
import Model from './model';
import gameAdapter from './data/game-adapter';
import {game, currentState} from './data/game';

const ControllerID = {
  WELCOME: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);

class Application {
  constructor() {
  /*  const preload = this.showWelcome();*/

    this.model = new class extends Model {
      get urlRead() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`;
      }

      get urlWrite() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/:username`;
      }
    }();

    this.model.load(gameAdapter)
      .then((data) => this.setup(data))
    /*  .then(preload)*/
      .then(() => this.changeController(getControllerIDFromHash(location.hash)));

  }

  setup(data) {
    this.routes = {
      [ControllerID.WELCOME]: new Welcome(),
      [ControllerID.GREETING]: new Greeting(),
      [ControllerID.RULES]: new Rules(),
      [ControllerID.GAME]: new Level(currentState, data),
      [ControllerID.STATS]: new Stats()
    }

    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    }
  }

  changeController(route = ``) {
  /*const Controller = this.routes[route];
    new Controller().init();*/
    this.routes[route].init();
  }
/*
  init() {
    this.changeController(getControllerIDFromHash(location.hash));
  }*/

  showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  showGreeting() {
    location.hash = ControllerID.GREETING;
  }

  showRules() {
    location.hash = ControllerID.RULES;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }

  showStats(state) {
    location.hash = ControllerID.STATS;
  }

  reset() {
    console.log(application);
    application = new Application();
  }

}

let application = new Application();

/*application.init();*/

export default application;
