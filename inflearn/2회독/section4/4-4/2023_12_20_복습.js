const solution = (num, arr) => {
  let answer = 0;
  let totalMoney = num;
  let cnt = 0;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < arr.length; i++) {
    let discountedMoney = totalMoney - (arr[i][0] / 2 + arr[i][1]);
    cnt = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[j][0] + arr[j][1] <= discountedMoney) {
        cnt++;
        discountedMoney -= arr[j][0] + arr[j][1];
      } else {
        answer = Math.max(cnt, answer);
        break;
      }
    }
    cnt = 0;
  }
  return answer;
};

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
