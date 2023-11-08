function solution(number) {
  if (number % 12 === 0) return number / 12;
  else return Math.floor(number / 12) + 1;
}

console.log(solution(25));
console.log(solution(178));
