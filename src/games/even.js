import gameEngine from '..';
import generateNum from '../utils';

const isEven = num => num % 2 === 0;

const even = () => {
  const operand = generateNum(1, 100);
  const data = {
    question: `${operand}`,
    answer: isEven(operand) ? 'yes' : 'no',
  };
  return data;
};

gameEngine(even, 'evenRul');

export default even;
