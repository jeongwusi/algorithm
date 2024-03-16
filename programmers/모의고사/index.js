const solution = (answers) => {
  const result = [];
  const scores = [0, 0, 0];

  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let i = 0; i < patterns.length; i++) {
    for (let j = 0; j < answers.length; j++) {
      if (answers[j] === patterns[i][j % patterns[i].length]) scores[i]++;
    }
  }

  const maxScore = Math.max(...scores);

  for (let i = 0; i < scores.length; i++) {
    if (maxScore === scores[i]) result.push(i + 1);
  }

  return result;
};

console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([5, 5, 5, 5, 5, 5, 5, 5]));
