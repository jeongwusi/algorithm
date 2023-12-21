function solution(s) {
  let stack = [];

  for (const el of s) {
    if (el === "(") stack.push(el);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length > 0 ? false : true;
}
console.log(solution("()()"));

console.log(solution("(())()"));

console.log(solution(")()("));
