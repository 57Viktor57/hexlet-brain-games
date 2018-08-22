import readlineSync from 'readline-sync';

export default () => {
  const data = {};
  const operations = ['*', '-', '+', '/'];
  const operands = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    .sort((a, b) => b - a);
  const currentOperation = operations[Math.floor(Math.random() * 3)];
  const question = `${operands[0]} ${currentOperation} ${operands[1]}`;

  console.log(`Question: ${question}`);

  data.userAnswer = readlineSync.question('Your answer: ');
  data.answer = eval(question);
  data.compare = parseInt(data.userAnswer, 10) === data.answer;

  return data;
};
