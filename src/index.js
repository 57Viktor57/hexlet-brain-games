import readlineSync from 'readline-sync';
import selectGame from './selectGame';

let state = true;

const mainMenu = () => {
  console.log('\nWelcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  while (state) {
    const selectedGame = selectGame();
    let resultGame = selectedGame();
    while (!resultGame.result) {
      console.log(`\n'${resultGame.userAnswer}' is wrong answer ;(. Correct answer was '${
        resultGame.answer}'.\nLet's try again, ${userName}!`);
      resultGame = selectedGame();
    }
    console.log(`Congratulations, ${userName}!`);
    const anotherGameQuestion = readlineSync.keyInYN('Do you want to play another game?');
    if (!anotherGameQuestion) {
      console.log('Good by ;-)');
      state = false;
    }
  }
};

export default mainMenu;
