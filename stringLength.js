const stringLength = (string) => {
  if (string.length < 1 && string.length > 10) {
    throw new Error('String must be at between 1 & 10 character');
  }
  return string.length;
};
module.exports = stringLength;