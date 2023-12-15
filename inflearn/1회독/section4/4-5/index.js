function solution(num, arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        newArr.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  const result = [...new Set(newArr.sort((a, b) => b - a))];
  return result[num - 1];
}

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
