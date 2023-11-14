function solution(str) {
  let result = 0;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") arr.push(str[i]);
    else {
      arr.pop();
      if (str[i - 1] === "(") result += arr.length;
      else result++;
    }
  }
  return result;
}

console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
