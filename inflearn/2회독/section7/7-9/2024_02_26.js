const solution = (arr) => {
  let result = 0;
  let newArr = [];
  for (const el of arr) {
    newArr.push([el[0], 1]);
    newArr.push([el[1], 2]);
  }

  newArr.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    else return a[0] - b[0];
  });

  let time = 0;
  for (const el of newArr) {
    if (el[1] === 1) time++;
    else {
      result = Math.max(result, time);
      time--;
    }
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
