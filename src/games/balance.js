import gameEngine from '..';
import generateRandomNum from '../utils';

const rul = 'Balance the given number.\n';
const numLength = generateRandomNum(3, 4);

const getBalanceNum = (num) => {
  const arrayNum = num.toString().split('');
  const sumNum = arrayNum.reduce((acc, value) => acc + parseInt(value, 10), 0);
  let result = '';
  const rest = sumNum % numLength;
  const minNum = (sumNum - (sumNum % numLength)) / numLength;

  for (let counter = 0; counter < numLength; counter += 1) {
    result += ((counter < numLength - rest) ? minNum : minNum + 1).toString();
  }

  return result;
};

const balance = () => {
  let numForGame = '';
  for (let counter = 0; counter < numLength; counter += 1) {
    numForGame += generateRandomNum(0, 9);
  }

  const data = {
    answer: getBalanceNum(Number(numForGame)),
    question: numForGame,
  };
  return data;
};

gameEngine(balance, rul);

export default balance;
