import readlineSync from 'readline-sync';

const attempts = 3;

const gameEngine = (game, rulesForGame) => {
  console.log(`Welcome to the Brain Games!\n`);
  console.log(rulesForGame);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let startCounter = 0; startCounter < attempts; startCounter += 1) {
    const { question, answer } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${
        answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
