function solution(arr) {
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[1] - b[1];
  });

  let endTime = 0;
  let result = 0;
  for (let el of arr) {
    if (el[0] >= endTime) {
      result++;
      endTime = el[1];
    }
  }
  return result;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);

console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
