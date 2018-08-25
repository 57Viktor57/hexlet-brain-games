import gameEngine from '../gameEngine';
import getRandomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers';
const minGameNum = 1;
const maxGameNum = 100;

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
  const firstOperand = getRandomNum(minGameNum, maxGameNum);
  const secondOperand = getRandomNum(minGameNum, maxGameNum);

  const data = {
    question: `${firstOperand} ${secondOperand}`,
    answer: `${getGcdNum(firstOperand, secondOperand)}`,
  };

  return data;
};

const startGame = () => gameEngine(gcd, description);

export default startGame;
