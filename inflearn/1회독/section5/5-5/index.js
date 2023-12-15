function solution(k, arr) {
  let newArr = [];
  let count = k;
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    tmp += arr[i];
    count--;
    for (let j = i + 1; j < arr.length; j++) {
      tmp += arr[j];
      count--;
      if (count === 0) {
        newArr.push(tmp);
        tmp = 0;
        count = k;
        break;
      }
    }
    tmp = 0;
    count = k;
  }
  return Math.max(...newArr);
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
