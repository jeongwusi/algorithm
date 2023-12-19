const solution = (arr) => {
  let total = 0;
  let count = 1;
  let temporaryScore = 1;
  for (const el of arr) {
    if (el === 1) {
      temporaryScore *= count;
      count++;
    } else {
      total += temporaryScore;
      temporaryScore = 1;
      count = 1;
    }
  }
  return total;
};

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
