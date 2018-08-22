import readlineSync from 'readline-sync';

const rules = {
  brainEvenRul: 'Answer "yes" if number even otherwise answer "no".\n',
  brainCalcRul: 'What is the result of the expression?\n',
  brainGcdRul: 'Find the greatest common divisor of given numbers.\n',
};

const gameEngine = (game, rul) => {
  console.log(`Welcome to the Brain Games!\n${rules[rul]}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let roundCounter = 0; roundCounter < 3; roundCounter += 1) {
    const data = game();
    console.log(`Question: ${data.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === data.answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${
        data.answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
