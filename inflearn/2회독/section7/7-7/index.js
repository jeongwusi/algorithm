const solution = (arr) => {
  return arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
};

console.log(
  solution([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 1],
    [2, 5],
    [3, 6],
  ])
);
