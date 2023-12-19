const solution = (num, arr) => {
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        tmp.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  return [...new Set(tmp)].sort((a, b) => b - a)[num - 1];
};

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
