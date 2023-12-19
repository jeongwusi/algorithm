const row = (arr) => {
  let maxSum = 0;
  for (const el of arr) {
    maxSum = Math.max(
      el.reduce((a, c) => a + c),
      maxSum
    );
  }
  return maxSum;
};

const column = (arr) => {
  let maxSum = 0;
  let tmpSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      tmpSum += arr[j][i];
    }
    maxSum = Math.max(tmpSum, maxSum);
    tmpSum = 0;
  }
  return maxSum;
};

const diagonal = (arr) => {
  let firstSum = 0;
  let secondSum = 0;
  for (let i = 0; i < arr.length; i++) {
    firstSum += arr[i][i];
  }

  for (let j = arr.length - 1; j >= 0; j--) {
    secondSum += arr[j][j];
  }

  return Math.max(firstSum, secondSum);
};

const solution = (arr) => {
  return Math.max(diagonal(arr), column(arr), row(arr));
};

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
