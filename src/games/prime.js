import gameEngine from '../gameEngine';
import getRandomNum from '../utils';

const description = 'Is this number prime?';
const minPrimeNumber = 2;
const minGameNum = 1;
const maxGameNum = 100;

const isPrime = (checkingNumber) => {
  if (checkingNumber === 1) return false;
  for (let divisor = minPrimeNumber; divisor < checkingNumber; divisor += 1) {
    if (checkingNumber % divisor === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const randomNum = getRandomNum(minGameNum, maxGameNum);
  const data = {
    answer: isPrime(randomNum) ? 'yes' : 'no',
    question: randomNum,
  };
  return data;
};

const startGame = () => gameEngine(prime, description);

export default startGame;
