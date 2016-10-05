let calc = (num, done) => {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return done(total);
};

let calcFactorial = (num) => {
  if (isNaN(num)) {
    return 'Number invalid';
  }

  if (num % 1 !== 0) {
    return 'Number must be an interger';
  }

  if (num <= 1) {
    return 1;
  }

  return calc(num, (done) => {
    return done;
  });
};

module.exports = {
  calcFactorial
};
