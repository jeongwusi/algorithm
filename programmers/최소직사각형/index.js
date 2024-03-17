function solution(sizes) {
  const widthArr = [];
  const heightArr = [];

  for (const el of sizes) {
    if (el[1] > el[0]) {
      widthArr.push(el[1]);
      heightArr.push(el[0]);
    } else {
      widthArr.push(el[0]);
      heightArr.push(el[1]);
    }
  }
  return Math.max(...widthArr) * Math.max(...heightArr);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
