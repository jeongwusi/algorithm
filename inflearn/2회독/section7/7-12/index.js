const count = (stable, distance) => {
  let cnt = 1;
  let ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= distance) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
};

const solution = (c, stable) => {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      lt = mid + 1;
      answer = mid;
    } else rt = mid - 1;
  }
  return answer;
};

console.log(solution(3, [1, 2, 8, 4, 9]));
