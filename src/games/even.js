import gameEngine from '..';
import generateNum from '../utils';

const rul = 'Answer "yes" if number even otherwise answer "no".\n';
const isEven = num => num % 2 === 0;

const even = () => {
  const operand = generateNum(1, 100);
  const data = {
    question: `${operand}`,
    answer: isEven(operand) ? 'yes' : 'no',
  };
  return data;
};

gameEngine(even, rul);

export default even;
