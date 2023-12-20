const solution = (arr) => {
  let answer = 0;
  let tmp = [];
  let cnt = 1;
  for (const el of arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j <= arr.length; j++) {
        tmp.push(Number(`${el[i]}${el[j]}`));
      }
    }
  }

  for (let i = 0; i < tmp.length; i++) {
    for (let j = i + 1; j < tmp.length; j++) {
      if (tmp[i] === tmp[j]) cnt++;
      if (cnt === arr.length) {
        answer++;
        break;
      }
    }
    cnt = 1;
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
