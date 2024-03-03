const count = (capacity, arr) => {
  let cnt = 1;
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (tmp + arr[i] > capacity) {
      cnt++;
      tmp = arr[i];
    } else tmp += arr[i];
  }
  return cnt;
};

const solution = (m, arr) => {
  let result = 0;
  arr.sort((a, b) => a - b);

  let lt = arr[arr.length - 1];
  let rt = arr.reduce((a, c) => a + c, 0);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(mid, arr) <= m) {
      result = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }
  return result;
};

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
