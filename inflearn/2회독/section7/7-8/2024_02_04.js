const solution = (arr) => {
  let result = 0;
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let time = 0;
  for (const el of arr) {
    if (el[0] >= time) {
      result++;
      time = el[1];
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
