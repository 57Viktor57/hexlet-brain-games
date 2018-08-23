import gameEngine from '..';
import { generateRandomNum, isEven } from '../utils';

const rul = 'Balance the given number.';
const progressionLength = 10;
const evenOdd = num => num + 2;
const multiple = num => num * 2;
const oddCounter = (num, counter) => (isEven(counter) ? num * counter : num * (counter + 1));
const algorithms = [evenOdd, multiple, oddCounter];

const progression = () => {
  const startNum = generateRandomNum(1, 9);
  const progr = [startNum];
  const randomeFunc = algorithms[generateRandomNum(0, algorithms.length - 1)];
  for (let counter = 0; counter < progressionLength - 1; counter += 1) {
    progr.push(randomeFunc(progr[counter], counter));
  }
  const randomeSpace = generateRandomNum(0, 9);
  const answer = `${progr[randomeSpace]}`;
  progr[randomeSpace] = '..';

  const data = {
    answer,
    question: progr.join(' '),
  };

  return data;
};

gameEngine(progression, rul);

export default progression;
