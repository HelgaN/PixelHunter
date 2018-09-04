import assert from 'assert';
import initialState from './game';
import {setLives} from './game';

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
      assert.equal(initialState.numberOfQuestions, 10);
    });
  });

  describe(`game time`, () => {
    it(`play time should last 30 seconds`, () => {
      assert.equal(initialState.time, 30);
    });
  });


});
