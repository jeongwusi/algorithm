const solution = (str) => {
  const stack = [];
  let result = 0;
  for (const el of str) {
    if (Number(el)) stack.push(el);
    else {
      if (result === 0) {
        result = eval(
          `${stack[stack.length - 1]} ${el} ${stack[stack.length - 2]}`
        );
        stack.splice(stack.length - 2);
      } else {
        result = eval(`${result} ${el} ${stack[stack.length - 1]}`);
        stack.pop();
      }
    }
  }
  return result;
};

console.log(solution("352+*9-"));
