module.exports = function reverse(n) {
  const numberToString = Math.abs(n).toString();
  let newString = '';
  for (let i = numberToString.length - 1; i >= 0; i -= 1) {
    newString += numberToString[i];
  }
  return Number(newString);
};
