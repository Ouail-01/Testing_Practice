const stringLength = require('../test1');

test('return the exact characters in a string', () => {
  expect(stringLength('testing')).toEqual(7);
  expect(stringLength('Js')).toEqual(2);
  expect(stringLength('')).toEqual(0);
});