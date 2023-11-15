function solution(arr) {
  let sortedArr = [...arr].sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) result.push(i + 1);
  }
  return result;
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));

console.log(solution([120, 130, 150, 150, 130, 150]));
