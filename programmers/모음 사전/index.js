function solution(word) {
  const obj = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  let total = 0;
  const length = word.length;
  for (let i = 0; i < length; i++) {
    const value = obj[word[i]];
    for (let j = 5 - i; j > 0; j--) {
      total += value * Math.pow(5, j - 1);
    }
  }
  return total + length;
}

console.log(solution("AAAAE"));
