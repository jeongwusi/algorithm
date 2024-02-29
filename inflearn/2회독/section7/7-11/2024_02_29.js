const count = (capacity, arr) => {
  let cnt = 1;
  let tmp = 0;
  for (const el of arr) {
    if (tmp + el > capacity) {
      tmp = el;
      cnt++;
    } else tmp += el;
  }
  return cnt;
};

const solution = (m, arr) => {
  let result = 0;
  arr.sort((a, b) => a - b);

  let lt = arr[arr.length - 1];
  let rt = arr.reduce((a, b) => a + b, 0);

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
