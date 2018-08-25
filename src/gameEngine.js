import readlineSync from 'readline-sync';

const attempts = 3;

const gameEngine = (game, description) => {
  console.log(`${description}\n`);
  for (let startCounter = 0; startCounter < attempts; startCounter += 1) {
    const { question, answer } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      const data = {
        result: false,
        answer,
        userAnswer,
      };
      return data;
    }
  }
  const data = {
    result: true,
  };
  return data;
};

export default gameEngine;
