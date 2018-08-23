import gameEngine from '..';
import generateNum from '../utils';

const funcForOperations = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => a / b];
const operations = ['+', '-', '*', '/'];

const calc = () => {
  const firstNum = generateNum(1, 100);
  const secondNum = generateNum(1, 100);
  const currentOperation = generateNum(0, 3);

  const data = {
    question: `${firstNum} ${operations[currentOperation]} ${secondNum}`,
    answer: `${funcForOperations[currentOperation](firstNum, secondNum)}`,
  };

  return data;
};

gameEngine(calc, 'calcRul');

export default calc;
