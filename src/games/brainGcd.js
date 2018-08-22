const gcd = (firstNum, secondNum) => {
  let a = firstNum;
  let b = secondNum;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

export default () => {
  const operands = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
    .sort((a, b) => b - a);

  const data = {
    question: `${operands[0]} ${operands[1]}`,
    answer: gcd(operands[0], operands[1]),
  };

  return data;
};
