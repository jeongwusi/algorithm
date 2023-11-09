function solution(num, arr) {
  let count = 0;
  let result = 0;
  for (let el of arr) {
    if (el === 1) {
      count++;
      result += count;
    } else count = 0;
  }
  return result;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(10, arr));
