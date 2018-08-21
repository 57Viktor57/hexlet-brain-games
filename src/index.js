import readlineSync from 'readline-sync';
import evenYesOrNo from './evenYesOrNo';

const brainGames = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};


const brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const game = evenYesOrNo();
    if (game.compare) {
      console.log('Correct!');
    } else {
      console.log(`'${game.userAnswer}' is wrong answer ;(. Correct answer was '${
        game.answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { brainEven, brainGames };
