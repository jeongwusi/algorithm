const solution = (str) => {
  let stack = [];
  for (const el of str) {
    if (el === "(") stack.push(el);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  return stack.length === 0 ? "YES" : "NO";
};

console.log(solution("(()(()))(()"));
