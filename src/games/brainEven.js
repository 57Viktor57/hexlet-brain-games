export default () => {
  const operand = Math.floor(Math.random() * 100);
  const data = {
    question: `${operand}`,
    answer: operand % 2 === 0 ? 'yes' : 'no',
  };
  return data;
};
