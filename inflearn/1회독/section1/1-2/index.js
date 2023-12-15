function solution(a, b, c) {
  let arr = [a, b, c].sort((a, b) => a - b);
  if (arr[0] + arr[1] > arr[2]) return "YES";
  else return "NO";
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
