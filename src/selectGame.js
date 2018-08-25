import readlineSync from 'readline-sync';
import even from './games/even';
import calc from './games/calc';
import gcd from './games/gcd';
import balance from './games/balance';
import prime from './games/prime';
import progression from './games/progression';

const games = ['even', 'calc', 'gcd', 'balance', 'prime', 'progression'];
const starterGames = [even, calc, gcd, balance, prime, progression];

const selectGame = () => {
  console.log('What game do you prefer?');
  const index = readlineSync.keyInSelect(games, 'Select game number: ', { guide: false, cancel: false });
  console.log(`You chose ${games[index]}-game\n`);
  return starterGames[index];
};

export default selectGame;
