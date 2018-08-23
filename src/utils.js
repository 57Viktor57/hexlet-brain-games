const generateRandomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const isEven = num => num % 2 === 0;

export { isEven, generateRandomNum };
