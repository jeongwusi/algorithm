const solution = (arr) => {
  let newArr = [];
  let sum = 0;
  for (const el of arr) {
    let tmpSum = [...String(el)].reduce((a, c) => Number(a) + Number(c));
    if (tmpSum >= sum) {
      newArr.push(el);
      sum = tmpSum;
    }
  }
  return Math.max(...newArr);
};

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
