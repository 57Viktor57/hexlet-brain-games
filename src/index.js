import readlineSync from 'readline-sync';
import evenYesOrNo from './games/evenYesOrNo';
import calc from './games/calc';

const rules = {
  brainEven: 'Answer "yes" if number even otherwise answer "no".\n',
  brainCalc: 'What is the result of the expression?\n',
};

const whoAreYou = () => readlineSync.question('May I have your name? ');

const game = (func, userName) => {
  for (let i = 0; i < 3; i += 1) {
    const data = func();
    if (data.compare) {
      console.log('Correct!');
    } else {
      return `'${data.userAnswer}' is wrong answer ;(. Correct answer was '${
        data.answer}'.\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

console.log('Welcome to the Brain Games!');

const brainEven = () => {
  console.log(rules.brainEven);

  const userName = whoAreYou();
  console.log(`Hello, ${userName}!\n`);

  console.log(game(evenYesOrNo, userName));
};

const brainCalc = () => {
  console.log(rules.brainCalc);

  const userName = whoAreYou();
  console.log(`Hello, ${userName}!\n`);

  console.log(game(calc, userName));
};

export { brainEven, brainCalc };
