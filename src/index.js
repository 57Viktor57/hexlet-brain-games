import readlineSync from 'readline-sync';

const rules = {
  evenRul: 'Answer "yes" if number even otherwise answer "no".\n',
  calcRul: 'What is the result of the expression?\n',
  gcdRul: 'Find the greatest common divisor of given numbers.\n',
  balanceRul: 'Balance the given number.\n',
};

const gameEngine = (game, rul) => {
  console.log(`Welcome to the Brain Games!\n${rules[rul]}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const endCounter = 3;
  for (let startCounter = 0; startCounter < endCounter; startCounter += 1) {
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
