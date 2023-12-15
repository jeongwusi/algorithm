const solution = (num, arr) => {
  let newArr = Array.from({ length: num + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = num; j > newArr[arr[i][1]]; j--) {
      if (newArr[j] < arr[i][0] + newArr[j - arr[i][1]]) {
        newArr[j] = arr[i][0] + newArr[j - arr[i][1]];
      }
    }
  }
  return newArr[num];
};

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
