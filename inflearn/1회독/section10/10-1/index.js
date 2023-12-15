const solution = (num) => {
  const dyArr = [];
  dyArr[1] = 1;
  dyArr[2] = 2;
  for (let i = 3; i <= num; i++) {
    dyArr[i] = dyArr[i - 1] + dyArr[i - 2];
  }
  return dyArr[num];
};

console.log(solution(7));
