function solution(lng, arr) {
  let result = 0;
  let xArr = [-1, 0, 1, 0];
  let yArr = [0, 1, 0, -1];
  for (let i = 0; i < lng; i++) {
    for (let j = 0; j < lng; j++) {
      let flag = 1;
      for (let k = 0; k < lng; k++) {
        let findX = i - xArr[k];
        let findY = j - yArr[k];
        if (
          findX >= 0 &&
          findX < lng &&
          findY >= 0 &&
          findY < lng &&
          arr[findX][findY] > arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) result++;
    }
  }
  return result;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(5, arr));
