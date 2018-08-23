import gameEngine from '..';
import { generateRandomNum } from '../utils';

const rul = 'Balance the given number.';
const progressionLength = 10;

const progression = () => {
  const startNum = generateRandomNum(1, 9);
  const stepProgress = generateRandomNum(1, 9);
  const progr = [startNum];
  for (let counter = 0; counter < progressionLength - 1; counter += 1) {
    const nextNum = progr[counter] + stepProgress;
    progr.push(nextNum);
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
