function solution(number) {
  let count = 0;
  for (let i = 0; i < number; i++) {
    count++;
  }
  return count;
}

console.log(solution(6));
console.log(solution(55));
