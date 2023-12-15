function solution(num) {
  let result = "";
  function DFS(num) {
    if (num === 0) return;
    DFS(Math.floor(num / 2));
    result += String(num % 2);
  }
  DFS(num);
  return result;
}

console.log(solution(11));
