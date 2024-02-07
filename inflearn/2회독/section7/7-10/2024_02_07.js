const solution = (target, arr) => {
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;
  while (rt >= lt) {
    let mid = Math.round((lt + rt) / 2);
    if (arr[mid] === target) return mid + 1;
    else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }
};

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
