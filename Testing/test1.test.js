const test1 = require('../test1');

test('return the exact characters in a string', () => {
  expect(test1('testing')).toEqual(7);
  expect(test1('Js')).toEqual(2);
  expect(test1('')).toEqual(0);
});