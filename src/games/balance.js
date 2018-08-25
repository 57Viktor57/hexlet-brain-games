import gameEngine from '../gameEngine';
import getRandomNum from '../utils';

const description = 'Balance the given number';
const minGameNum = 100;
const maxGameNum = 9999;

const getBalanceNum = (num) => {
  const arrayNum = num.toString().split('');
  const sumNum = arrayNum.reduce((acc, value) => acc + parseInt(value, 10), 0);
  let result = '';
  const rest = sumNum % arrayNum.length;
  const minNum = (sumNum - (sumNum % arrayNum.length)) / arrayNum.length;

  for (let counter = 0; counter < arrayNum.length; counter += 1) {
    result += ((counter < arrayNum.length - rest) ? minNum : minNum + 1).toString();
  }

  return result;
};

const balance = () => {
  const numForGame = getRandomNum(minGameNum, maxGameNum);

  const data = {
    answer: getBalanceNum(numForGame),
    question: numForGame,
  };
  return data;
};

const startGame = () => gameEngine(balance, description);

export default startGame;
