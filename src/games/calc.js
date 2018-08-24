import gameEngine from '..';
import getRandomNum from '../utils';

const rulesForGame = 'What is the result of the expression?';
const funcForOperations = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => a / b];
const operations = ['+', '-', '*', '/'];

const calc = () => {
  const firstOperand = getRandomNum(1, 100);
  const secondOperand = getRandomNum(1, 100);
  const currentOperation = getRandomNum(0, 3);

  const data = {
    question: `${firstOperand} ${operations[currentOperation]} ${secondOperand}`,
    answer: `${funcForOperations[currentOperation](firstOperand, secondOperand)}`,
  };

  return data;
};

gameEngine(calc, rulesForGame);

export default calc;
