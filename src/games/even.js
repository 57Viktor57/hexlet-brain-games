import gameEngine from '../gameEngine';
import getRandomNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';
const isEven = num => num % 2 === 0;
const minGameNum = 1;
const maxGameNum = 100;

const even = () => {
  const operand = getRandomNum(minGameNum, maxGameNum);
  const data = {
    question: `${operand}`,
    answer: isEven(operand) ? 'yes' : 'no',
  };
  return data;
};

const startGame = () => gameEngine(even, description);

export default startGame;
