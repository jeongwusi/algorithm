const solution = (num) => {
  const arr = [];
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= num + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[num + 1];
};

console.log(solution(7));
