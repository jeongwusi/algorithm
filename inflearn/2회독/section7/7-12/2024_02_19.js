const count = (distance, arr) => {
  let cnt = 1;
  let ep = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= distance) {
      cnt++;
      ep = arr[i];
    }
  }
  return cnt;
};

const solution = (distance, arr) => {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 1;
  let rt = arr[arr.length - 1];
  while (rt >= lt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(mid, arr) >= distance) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return answer;
};

console.log(solution(3, [1, 2, 8, 4, 9]));
