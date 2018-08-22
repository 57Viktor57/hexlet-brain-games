const getbalanceNum = (arrayNum) => {
  const sumNum = arrayNum.reduce((acc, value) => acc + value);
  let result = '';
  const rest = sumNum % arrayNum.length;
  const minNum = (sumNum - (sumNum % arrayNum.length)) / arrayNum.length;

  for (let counter = 0; counter < arrayNum.length; counter += 1) {
    result += ((counter < arrayNum.length - rest) ? minNum : minNum + 1).toString();
  }

  return result;
};


export default () => {
  const numberForQuestion = [];
  const numLength = Math.floor(Math.random() * 2 + 3);

  for (let counter = 0; counter < numLength; counter += 1) {
    numberForQuestion.push(Math.floor(Math.random() * 10));
  }

  const data = {
    answer: getbalanceNum(numberForQuestion),
    question: `${numberForQuestion.reduce((acc, value) => acc + value, '')}`,
  };
  return data;
};
