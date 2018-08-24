import gameEngine from '..';
import getRandomNum from '../utils';

const rulesForGame = 'Balance the given number.';
const progressionLength = 10;

const progression = () => {
  const startNum = getRandomNum(1, 9);
  const stepProgress = getRandomNum(1, 9);
  const progr = [startNum];
  for (let counter = 0; counter < progressionLength - 1; counter += 1) {
    const nextNum = progr[counter] + stepProgress;
    progr.push(nextNum);
  }
  const randomeSpace = getRandomNum(0, 9);
  const answer = `${progr[randomeSpace]}`;
  progr[randomeSpace] = '..';

  const data = {
    answer,
    question: progr.join(' '),
  };

  return data;
};

gameEngine(progression, rulesForGame);

export default progression;
