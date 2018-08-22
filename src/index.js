import readlineSync from 'readline-sync';
import gamePattern from './gamePattern';
import evenYesOrNo from './games/evenYesOrNo';
import calc from './games/calc';

const rules = {
  brainEven: 'Answer "yes" if number even otherwise answer "no".\n',
  brainCalc: 'What is the result of the expression?\n',
};

const whoAreYou = () => readlineSync.question('May I have your name? ');

console.log('Welcome to the Brain Games!');

const brainEven = () => {
  console.log(rules.brainEven);

  const userName = whoAreYou();
  console.log(`Hello, ${userName}!\n`);

  console.log(gamePattern(evenYesOrNo, userName));
};

const brainCalc = () => {
  console.log(rules.brainCalc);

  const userName = whoAreYou();
  console.log(`Hello, ${userName}!\n`);

  console.log(gamePattern(calc, userName));
};

export { brainEven, brainCalc };
