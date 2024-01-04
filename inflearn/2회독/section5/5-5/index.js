const solution = (num, arr) => {
  let result = 0;
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    tmp += arr[i];
    for (let j = 1; j < num; j++) {
      if (i + j > arr.length - 1) break;
      tmp += arr[i + j];
    }
    result = Math.max(result, tmp);
    tmp = 0;
  }
  return result;
};

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
