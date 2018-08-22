import readlineSync from 'readline-sync';
import gamePattern from './gamePattern';
import evenYesOrNo from './games/evenYesOrNo';
import calc from './games/calc';
import gcd from './games/gcd';


const rules = {
  brainEven: 'Answer "yes" if number even otherwise answer "no".\n',
  brainCalc: 'What is the result of the expression?\n',
  brainGcd: 'Find the greatest common divisor of given numbers.\n',
};

const whoYouAre = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

console.log('Welcome to the Brain Games!');

const brainEven = () => {
  console.log(rules.brainEven);
  const userName = whoYouAre();
  console.log(gamePattern(evenYesOrNo, userName));
};

const brainCalc = () => {
  console.log(rules.brainCalc);
  const userName = whoYouAre();
  console.log(gamePattern(calc, userName));
};

const brainGcd = () => {
  console.log(rules.brainGcd);
  const userName = whoYouAre();
  console.log(gamePattern(gcd, userName));
};

export { brainEven, brainCalc, brainGcd };
