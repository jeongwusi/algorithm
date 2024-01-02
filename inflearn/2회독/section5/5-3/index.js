const solution = (sum, arr) => {
  let result = 0;
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    tmp += arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      tmp += arr[j];
      if (sum < tmp) {
        tmp = 0;
        break;
      }
      if (sum === tmp) {
        result++;
        tmp = 0;
        break;
      }
    }
  }

  return result;
};

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
