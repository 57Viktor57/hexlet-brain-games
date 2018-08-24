import gameEngine from '..';
import getRandomNum from '../utils';

const rulesForGame = 'Find the greatest common divisor of given numbers.';

const getGcdNum = (firstOperand, secondOperand) => {
  let a = firstOperand;
  let b = secondOperand;
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
  const firstOperand = getRandomNum(1, 100);
  const secondOperand = getRandomNum(1, 100);

  const data = {
    question: `${firstOperand} ${secondOperand}`,
    answer: `${getGcdNum(firstOperand, secondOperand)}`,
  };

  return data;
};

gameEngine(gcd, rulesForGame);

export default gcd;
