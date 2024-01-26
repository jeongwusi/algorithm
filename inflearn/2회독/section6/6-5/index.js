const solution = (str) => {
  const stack = [];
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push("(");
    else {
      stack.pop();
      if (str[i - 1] === "(") result += stack.length;
      else result += 1;
    }
  }
  return result;
};

console.log(solution("()(((()())(())()))(())"));

console.log(solution("(((()(()()))(())()))(()())"));
