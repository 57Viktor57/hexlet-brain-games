export default (func, userName) => {
  for (let counter = 0; counter < 3; counter += 1) {
    const data = func();
    if (data.compare) {
      console.log('Correct!');
    } else {
      return `'${data.userAnswer}' is wrong answer ;(. Correct answer was '${
        data.answer}'.\nLet's try again, ${userName}!`;
    }
  }

  return `Congratulations, ${userName}!`;
};
