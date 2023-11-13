function solution(str) {
  let arr = [];
  for (let el of str) {
    if ("(" === el) arr.push(el);
    if (")" === el) arr.pop();
  }
  if (arr.length === 0) return "YES";
  else return "NO";
}

console.log(solution("(()(()))(()"));
