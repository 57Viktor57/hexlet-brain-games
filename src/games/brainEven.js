export default () => {
  const data = {};
  const operand = Math.floor(Math.random() * 100);
  data.question = `${operand}`;
  data.answer = operand % 2 === 0 ? 'yes' : 'no';
  return data;
};
