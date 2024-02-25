const count = (capacity, arr) => {
  let cnt = 1;
  let sum = 0;
  for (const el of arr) {
    if (sum + el > capacity) {
      cnt++;
      sum = el;
    } else sum += el;
  }
  return cnt;
};

const solution = (m, arr) => {
  let result;
  arr.sort((a, b) => a - b);

  let lt = Math.max(...arr);
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
