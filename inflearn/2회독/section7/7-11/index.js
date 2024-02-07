const count = (volume, arr) => {
  let sum = 0;
  let cnt = 1;
  for (const el of arr) {
    if (sum + el > volume) {
      cnt++;
      sum = el;
    } else sum += el;
  }
  return cnt;
};

const solution = (m, songs) => {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, c) => a + c);
  while (rt >= lt) {
    let mid = Math.round((lt + rt) / 2);
    if (count(mid, songs) <= m) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }
  return answer;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
