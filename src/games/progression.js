import gameEngine from '../gameEngine';
import getRandomNum from '../utils';

const description = 'Balance the given number';
const progressionLength = 10;

const progression = () => {
  const startNum = getRandomNum(1, 9);
  const stepProgress = getRandomNum(1, 9);
  const currentProgression = [];

  for (let counter = 0; counter < progressionLength; counter += 1) {
    const nextNum = startNum + stepProgress * counter;
    currentProgression.push(nextNum);
  }

  const randomeSpace = getRandomNum(0, progressionLength - 1);
  const answer = `${currentProgression[randomeSpace]}`;
  currentProgression[randomeSpace] = '..';
  const question = currentProgression.join(' ');

  const data = {
    answer,
    question,
  };

  return data;
};

const startGame = () => gameEngine(progression, description);

export default startGame;
