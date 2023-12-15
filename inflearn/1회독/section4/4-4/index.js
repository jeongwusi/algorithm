function solution(money, arr) {
  let newArr = arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  let resultArr = [];
  let rest = money;
  for (let i = 0; i < newArr.length; i++) {
    rest -= newArr[i][0] / 2 + newArr[i][1];
    resultArr.push([newArr[i][0], newArr[i][1]]);
    for (let j = 0; j < newArr.length; j++) {
      if (i !== j) {
        rest -= newArr[j][0] + newArr[j][1];
        resultArr.push([newArr[j][0], newArr[j][1]]);
      }
      if (rest === 0) return resultArr.length;
    }
    resultArr = [];
    rest = money;
  }
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
