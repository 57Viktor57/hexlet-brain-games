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
      console.log(`'${data.userAnswer}' is wrong answer ;(. Correct answer was '${
        data.answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
};

console.log('Welcome to the Brain Games!');

const brainGames = () => {
  const userName = whoAreYou();
  console.log(`Hello, ${userName}!`);
};

const brainEven = () => {
  console.log(rules.brainEven);

  const userName = whoAreYou();
  console.log(`Hello, ${userName}!\n`);

  game(evenYesOrNo, userName);

  console.log(`Congratulations, ${userName}!`);
};

const brainCalc = () => {
  console.log(rules.brainCalc);

  const userName = whoAreYou();
  console.log(`Hello, ${userName}!\n`);

  game(calc, userName);

  console.log(`Congratulations, ${userName}!`);
};

export { brainEven, brainGames, brainCalc };
