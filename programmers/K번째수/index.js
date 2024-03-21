function solution(array, commands) {
  const answer = [];
  for (const el of commands) {
    const tmp = [];
    for (let i = el[0] - 1; i < el[1]; i++) {
      tmp.push(array[i]);
    }
    answer.push(tmp.sort((a, b) => a - b)[el[2] - 1]);
  }
  return answer;
}
