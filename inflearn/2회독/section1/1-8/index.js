const solution = (arr) => {
  let flag = 0;
  const sum = arr.reduce((a, c) => a + c);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag === 1) break;
  }
  return arr;
};

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
