//the code :
function addNumbers(a, b) {
  if (a > 0 && b > 0) {
    return a + b;
  } else {
    return "parameter needs to be a number";
  }
}

module.exports = addNumbers;
