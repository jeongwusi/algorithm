const solution = (arr) => {
  arr.sort((a, b) => {
    if (a[1] === b[1]) a[0] - b[0];
    else return a[1] - b[1];
  });

  let cnt = 0;
  let tmp = 0;
  for (const el of arr) {
    if (el[0] >= tmp) {
      cnt++;
      tmp = el[1];
    }
  }
  return cnt;
};

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
