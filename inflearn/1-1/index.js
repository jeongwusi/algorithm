function solution(a, b, c) {
  if (a < b && a < c) return a;
  if (a > b && b < c) return b;
  else c;
}

console.log(solution(6, 5, 11));
