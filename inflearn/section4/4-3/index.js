function solution(arr) {
  let newArr = [];
  let count = 1;
  let result = 0;
  for (let el of arr) {
    for (let i = 0; i < el.length; i++) {
      for (let j = i + 1; j < el.length; j++) {
        newArr.push(Number(`${el[i]}${el[j]}`));
      }
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] === newArr[j]) {
        count++;
      }
      if (count === arr.length) {
        result++;
        count = 1;
        break;
      }
    }
    count = 1;
  }
  return result;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
