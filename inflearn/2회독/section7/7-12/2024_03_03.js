const count = (distance, arr) => {
  let cnt = 1;
  let endPoint = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - endPoint >= distance) {
      cnt++;
      endPoint = arr[i];
    }
  }
  return cnt;
};

const solution = (c, arr) => {
  let result = 0;
  arr.sort((a, b) => a - b);

  let lt = 1;
  let rt = arr[arr.length - 1];

  while (rt >= lt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(mid, arr) >= c) {
      result = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return result;
};

console.log(solution(3, [1, 2, 8, 4, 9]));
