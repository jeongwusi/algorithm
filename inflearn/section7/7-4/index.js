function solution(arr) {
  let tmp = 0;
  for (let i = 1; i < arr.length; i++) {
    tmp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else {
        arr[j + 1] = tmp;
        break;
      }
      arr[j] = tmp;
    }
  }
  return arr;
}

console.log(solution([11, 7, 5, 6, 10, 9]));

// i는 1번 인덱스부터 전부 배열 돈다.
// j는 i - 1부터 0까지 돈다.
