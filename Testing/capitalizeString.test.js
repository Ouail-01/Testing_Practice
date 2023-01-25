/* eslint-disable */
const capitalize = require('../capitalizeString');

describe('capitalize', () => {
  it('should takes a string as an argument and returns that string with the first character capitalized', () => {
    expect(capitalize('testing')).toEqual('Testing');
    expect(capitalize('js')).toEqual('Js');
    expect(capitalize('')).toEqual('');
  });
});