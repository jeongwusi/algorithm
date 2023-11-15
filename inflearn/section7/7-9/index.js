function solution(arr) {
  // 1: start
  // 2: end
  let result = 0;
  let resultArr = [];
  let timeLineArr = [];
  for (let el of arr) {
    timeLineArr.push([el[0], 1]);
    timeLineArr.push([el[1], 2]);
  }

  timeLineArr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    if (a[0] === b[0]) return b[1] - a[1];
    else return a[0] - b[0];
  });

  for (let el of timeLineArr) {
    if (el[1] === 1) {
      result++;
      resultArr.push(result);
    } else {
      result--;
      resultArr.push(result);
    }
  }
  return Math.max(...resultArr);
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
