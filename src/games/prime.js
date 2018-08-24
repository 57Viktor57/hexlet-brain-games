import gameEngine from '..';
import getRandomNum from '../utils';

const rulesForGame = 'Is this number prime?';
const minPrimeNumber = 2;

const checkPrime = (checkingNumber) => {
  if (checkingNumber === 1) return 'no';
  for (let divisor = minPrimeNumber; divisor < checkingNumber; divisor += 1) {
    if (checkingNumber % divisor === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const prime = () => {
  const randomNum = getRandomNum(1, 100);
  const data = {
    answer: checkPrime(randomNum),
    question: randomNum,
  };
  return data;
};

gameEngine(prime, rulesForGame);

export default prime;
