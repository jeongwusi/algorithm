const count = (arr, capacity) => {
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

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  while (rt >= lt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
