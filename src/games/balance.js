import gameEngine from '..';
import generateNum from '../utils';

const getBalanceNum = (str) => {
  const arrayNum = str.split('');
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
  const numberForQuestion = [];
  const numLength = generateNum(3, 4);
  for (let counter = 0; counter < numLength; counter += 1) {
    numberForQuestion.push(generateNum(0, 9));
  }
  const numForGame = numberForQuestion.reduce((acc, value) => acc + value, '');

  const data = {
    answer: getBalanceNum(numForGame),
    question: `${numForGame}`,
  };
  return data;
};

gameEngine(balance, 'balanceRul');

export default balance;
