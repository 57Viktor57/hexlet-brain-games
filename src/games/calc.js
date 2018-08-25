import gameEngine from '../gameEngine';
import getRandomNum from '../utils';

const description = 'What is the result of the expression?';
const funcForOperations = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => a / b];
const operations = ['+', '-', '*', '/'];
const minGameNum = 1;
const maxGameNum = 100;

const calc = () => {
  const firstOperand = getRandomNum(minGameNum, maxGameNum);
  const secondOperand = getRandomNum(minGameNum, maxGameNum);
  const currentOperation = getRandomNum(0, operations.length - 1);

  const data = {
    question: `${firstOperand} ${operations[currentOperation]} ${secondOperand}`,
    answer: `${funcForOperations[currentOperation](firstOperand, secondOperand)}`,
  };

  return data;
};

const startGame = () => gameEngine(calc, description);

export default startGame;
