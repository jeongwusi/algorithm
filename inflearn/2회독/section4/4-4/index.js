const solution = (m, arr) => {
  let answer = 0;
  let totalMoney = m;
  let cnt = 1;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < arr.length; i++) {
    let discountedMoney = arr[i][0] / 2 + arr[i][1];
    totalMoney -= discountedMoney;

    for (let j = 0; j < arr.length; j++) {
      if (j !== i && arr[j][0] + arr[j][1] > totalMoney) break;
      if (j !== i && arr[j][0] + arr[j][1] <= totalMoney) {
        cnt++;
        totalMoney -= arr[j][0] + arr[j][1];
      }
    }
    answer = Math.max(cnt, answer);
  }
  return answer;
};

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
