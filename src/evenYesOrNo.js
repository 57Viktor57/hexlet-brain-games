import readlineSync from 'readline-sync';

export default () => {
  const data = {};
  const num = Math.floor(Math.random() * 100);

  console.log(`Question: ${num}`);

  data.userAnswer = readlineSync.question('Your answer: ');
  data.answer = num % 2 === 0 ? 'yes' : 'no';
  data.compare = data.userAnswer === data.answer;

  return data;
};
