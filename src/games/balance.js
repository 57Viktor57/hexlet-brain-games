import gameEngine from '..';
import getRandomNum from '../utils';

const rulesForGame = 'Balance the given number.';

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
  const numForGame = getRandomNum(100, 9999);

  const data = {
    answer: getBalanceNum(numForGame),
    question: numForGame,
  };
  return data;
};

gameEngine(balance, rulesForGame);

export default balance;
