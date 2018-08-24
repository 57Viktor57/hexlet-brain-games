import gameEngine from '..';
import getRandomNum from '../utils';

const rulesForGame = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const even = () => {
  const operand = getRandomNum(1, 100);
  const data = {
    question: `${operand}`,
    answer: isEven(operand) ? 'yes' : 'no',
  };
  return data;
};

gameEngine(even, rulesForGame);

export default even;
