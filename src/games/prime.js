import gameEngine from '..';
import getRandomNum from '../utils';

const rulesForGame = 'Is this number prime?';

const checkPrime = (num) => {
  if (num === 1) return 'no';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
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
