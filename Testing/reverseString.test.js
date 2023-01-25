const reverseString = require('../reverseString');

test('return the exact characters in a string', () => {
  expect(reverseString('testing')).toEqual('gnitset');
  expect(reverseString('Js')).toEqual('sJ');
});