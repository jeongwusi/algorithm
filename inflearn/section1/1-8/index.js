function solution(arr) {
  const rest = arr.reduce((a, b) => a + b) - 100;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === rest) {
        arr.splice(i, 1);
        arr.splice(j - 1, 1);
      }
    }
  }
  return arr;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
