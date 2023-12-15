function solution(num, arr) {
  arr.sort((a, b) => a - b);
  let lt = 1;
  let rt = arr[arr.length - 1];
  let ep = 0;
  let count = 1;
  let result = 0;
  while (lt <= rt) {
    let mid = Math.floor((rt + lt) / 2);
    ep = 1;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - ep < mid) continue;
      else {
        ep = arr[i];
        count++;
      }
    }
    if (count < num) {
      rt = mid - 1;
      if (result <= count) result = count;
      count = 1;
    } else {
      lt = mid + 1;
      if (result <= count) result = count;
      count = 1;
    }
  }
  return result;
}

console.log(solution(3, [1, 2, 8, 4, 9]));
