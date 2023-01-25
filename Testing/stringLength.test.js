/* eslint-disable */
const stringLength = require('../stringLength');

test('return a characters between 1 & 10', () => {
  expect(stringLength('testing')).toEqual(7);
  expect(stringLength('Js')).toEqual(2);
});

test.todo('throw error'), () => {
  expect(stringLength('qsdqdsqdqsdqsdqsd')).toThrow('String must be at between 1 & 10 character');
};