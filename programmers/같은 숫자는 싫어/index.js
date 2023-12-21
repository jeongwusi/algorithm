function solution(arr) {
  let newArr = [];

  let i = 0;
  while (i < arr.length) {
    let j = i + 1;
    while (j < arr.length && arr[j] === arr[i]) {
      j++;
    }
    newArr.push(arr[i]);
    i = j;
  }
  return newArr;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));

console.log(solution([4, 4, 4, 3, 3]));
