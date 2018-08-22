export default () => {
  const funcForOperations = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => a / b];
  const operations = ['+', '-', '*', '/'];
  const operands = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    .sort((a, b) => b - a);
  const currentOperation = Math.floor(Math.random() * 4);

  const data = {
    question: `${operands[0]} ${operations[currentOperation]} ${operands[1]}`,
    answer: `${funcForOperations[currentOperation](operands[0], operands[1])}`,
  };

  return data;
};
