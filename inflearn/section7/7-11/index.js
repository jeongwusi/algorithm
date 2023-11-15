function solution(num, arr) {
  let result = 0;
  let count = 0;
  let tmp = 0;
  let leftIndex = arr[arr.length - 1];
  let rightIndex = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    for (let i = 0; i < arr.length; i++) {
      if (tmp <= middleIndex) tmp += arr[i];
      else {
        count++;
        tmp = 0;
      }
    }
    if (num >= count) {
      result = middleIndex;
      rightIndex = middleIndex - 1;
    } else return result;
  }
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
