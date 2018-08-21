import readlineSync from 'readline-sync';

export default () => {
  const data = {};
  const operand = Math.floor(Math.random() * 100);

  console.log(`Question: ${operand}`);

  data.userAnswer = readlineSync.question('Your answer: ');
  data.answer = operand % 2 === 0 ? 'yes' : 'no';
  data.compare = data.userAnswer === data.answer;

  return data;
};
