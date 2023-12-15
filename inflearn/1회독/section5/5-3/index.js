function solution(sum, arr) {
  let result = 0;
  let rest = sum;
  for (let i = 0; i < arr.length; i++) {
    rest -= arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (rest > 0) rest -= arr[j];
      if (rest === 0) {
        result++;
        rest = sum;
        break;
      }
      if (rest < 0) {
        rest = sum;
        break;
      }
    }
    rest = sum;
  }
  return result;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
