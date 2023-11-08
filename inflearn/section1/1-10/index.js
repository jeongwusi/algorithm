function solution(str, cha) {
  let count = 0;
  let arr = str.split("");
  for (let el of arr) {
    if (el === cha) count++;
  }
  return count;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
