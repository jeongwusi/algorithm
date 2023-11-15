function solution(num, arr) {
  let result = 0;
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  arr.sort((a, b) => a - b);

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    if (arr[middleIndex] === num) {
      result = middleIndex + 1;
      break;
    } else if (arr[middleIndex] > num) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return result;
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
