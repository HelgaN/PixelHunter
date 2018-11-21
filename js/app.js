import Welcome from './welcome/welcome';
import Greeting from './greeting/greeting';
import Rules from './rules/rules';
import Level from './level/level';
import Stats from './stats/stats';
import Model from './model';
import gameAdapter from './data/game-adapter';

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
    const preload = this.showWelcome();

    this.model = new class extends Model {
      get urlRead() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`;
      }

      get urlWrite() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/:username`;
      }
    }();

    this.model.load(gameAdapter)
      .then((data) => console.log(data));

    this.routes = {
      [ControllerID.WELCOME]: Welcome,
      [ControllerID.GREETING]: Greeting,
      [ControllerID.RULES]: Rules,
      [ControllerID.GAME]: Level,
      [ControllerID.STATS]: Stats
    }

  window.onhashchange = () => {
    this.changeController(getControllerIDFromHash(location.hash));
   }
  }

  changeController(route = ``) {
    const Controller = this.routes[route];
    new Controller().init();
  }

  init() {
    this.changeController(getControllerIDFromHash(location.hash));
  }

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

}

const application = new Application();
application.init();

export default application;
