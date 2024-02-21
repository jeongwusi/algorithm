const solution = (arr) => {
  arr.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  let time = 0;
  let result = 0;
  for (const el of arr) {
    if (el[0] >= time) {
      time = el[1];
      result++;
    }
  }
  return result;
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
