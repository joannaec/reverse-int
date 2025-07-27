module.exports = function reverse(n) {
  let numberToString = Math.abs(n).toString();

  let newString = "";
  for (let i = numberToString.length - 1; i >= 0; i--) {
    newString = newString + numberToString[i];
  }
  return Number(newString);
};






