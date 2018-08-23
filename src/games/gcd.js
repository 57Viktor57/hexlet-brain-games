import gameEngine from '..';
import generateNum from '../utils';

const rul = 'Find the greatest common divisor of given numbers.';

const getGcdNum = (firstNum, secondNum) => {
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

const gcd = () => {
  const firstNum = generateNum(1, 100);
  const secondNum = generateNum(1, 100);

  const data = {
    question: `${firstNum} ${secondNum}`,
    answer: `${getGcdNum(firstNum, secondNum)}`,
  };

  return data;
};

gameEngine(gcd, rul);

export default gcd;
