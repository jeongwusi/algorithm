function solution(number, arr) {
  let newArr = [arr[0]];
  for (let i = 1; i < number; i++) {
    if (arr[i] > arr[i - 1]) newArr.push(arr[i]);
  }
  return newArr;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(6, arr));
