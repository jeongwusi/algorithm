const solution = (target, arr) => {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 1;
  let rt = arr.length - 1;
  while (rt >= lt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else lt = mid + 1;
  }
  return answer;
};

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
