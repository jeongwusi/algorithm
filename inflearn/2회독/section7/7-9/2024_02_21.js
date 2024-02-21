const solution = (arr) => {
  let store = [];
  let tmp = 0;
  let result = 0;

  for (const el of arr) {
    store.push([el[0], 1]);
    store.push([el[1], 2]);
  }

  store.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    else return a[0] - b[0];
  });

  for (const el of store) {
    if (el[1] === 1) {
      tmp++;
    } else tmp--;
    if (tmp > result) result = tmp;
  }
  return result;
};

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
