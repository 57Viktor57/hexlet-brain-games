import readlineSync from 'readline-sync';

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
  const data = {};
  const operands = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
    .sort((a, b) => b - a);

  console.log(`Question: ${operands[0]} ${operands[1]}`);
  data.userAnswer = readlineSync.question('Your answer: ');
  data.answer = gcd(operands[0], operands[1]);
  data.compare = parseInt(data.userAnswer, 10) === data.answer;

  return data;
};
