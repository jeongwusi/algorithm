const solution = (arr) => {
  let answer = 0;
  let count = 1;
  let tmp = [];
  for (const el of arr) {
    for (let i = 0; i < el.length; i++) {
      for (let j = i + 1; j < el.length; j++) {
        tmp.push(Number(`${el[i]}${el[j]}`));
      }
    }
  }

  for (let i = 0; i < tmp.length; i++) {
    for (let j = i + 1; j < tmp.length; j++) {
      if (tmp[i] === tmp[j]) {
        count++;
        if (count === arr.length) {
          answer++;
          count = 1;
          break;
        }
      }
    }
    count = 1;
  }
  return answer;
};

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
