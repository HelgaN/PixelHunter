import assert from 'assert';
import initialState from './game';
import {setLives, game} from './game';
import {analyzeTheSpeedOfAnswer} from './../analyze-time';

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

describe(`Game`, () => {
  describe(`Character lives`, () => {
    it(`should update level`, () => {
      assert(1, setLives(initialState, 1).lives);
    });

    it(`shouldn't allow set negative lives`, () => {
      const setNegativeLives = () => {
        setLives(initialState, -1);
      }
      assert.throws(setNegativeLives);
    });

    it(`should have 3 lives on start`, () => {
      assert.equal(initialState.lives, 3);
    });
  });

  describe(`number of questions`, () => {
    it(`should be 10 questions on start`, () => {
      assert.equal(game.length, 10);
    });
  });

  describe(`game time`, () => {
    it(`play time should last 30 seconds`, () => {
      assert.equal(initialState.time, 30);
    });
  });

  describe(`type of questions`, () => {
    it(`should be three types of questions`, () => {
      let arr = [];
      for (let value of game) {
        arr.push(value.type);
      }
      const uniq = [...new Set(arr)];

      assert.equal(uniq.length, 3);
    });
  });

  describe(`analysis of time responses of the player`, () => {
    it(`should be slow`, () => {
      assert.equal(analyzeTheSpeedOfAnswer(9), `slow`);
      assert.equal(analyzeTheSpeedOfAnswer(8), `slow`);
      assert.equal(analyzeTheSpeedOfAnswer(7), `slow`);
      assert.equal(analyzeTheSpeedOfAnswer(6), `slow`);
      assert.equal(analyzeTheSpeedOfAnswer(5), `slow`);
      assert.equal(analyzeTheSpeedOfAnswer(4), `slow`);
      assert.equal(analyzeTheSpeedOfAnswer(3), `slow`);
      assert.equal(analyzeTheSpeedOfAnswer(2), `slow`);
      assert.equal(analyzeTheSpeedOfAnswer(1), `slow`);
    });

    it(`should be fast`, () => {
      assert.equal(analyzeTheSpeedOfAnswer(30), `fast`);
      assert.equal(analyzeTheSpeedOfAnswer(29), `fast`);
      assert.equal(analyzeTheSpeedOfAnswer(28), `fast`);
      assert.equal(analyzeTheSpeedOfAnswer(27), `fast`);
      assert.equal(analyzeTheSpeedOfAnswer(26), `fast`);
      assert.equal(analyzeTheSpeedOfAnswer(25), `fast`);
      assert.equal(analyzeTheSpeedOfAnswer(24), `fast`);
      assert.equal(analyzeTheSpeedOfAnswer(23), `fast`);
      assert.equal(analyzeTheSpeedOfAnswer(22), `fast`);
      assert.equal(analyzeTheSpeedOfAnswer(21), `fast`);
    });
  });

});
