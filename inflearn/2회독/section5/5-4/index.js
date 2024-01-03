const solution = (sum, arr) => {
  let result = 0;
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= sum) result++;
    tmp += arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      tmp += arr[j];
      if (tmp <= sum) {
        result++;
        continue;
      }
      if (tmp > sum) {
        tmp = 0;
        break;
      }
    }
  }
  return result;
};

console.log(solution(5, [1, 3, 1, 2, 3]));
