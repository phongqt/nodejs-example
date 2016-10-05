function factorial(num) {
  if (isNaN(num)) {
    return "number invalid";
  }
  if (num % 10 != 0) {
    return "number must be interger";
  }
  return "valid";
}

module.exports = factorial;