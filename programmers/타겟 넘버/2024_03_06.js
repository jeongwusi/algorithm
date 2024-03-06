const solution = (numbers, target) => {
  let answer = 0;
  let tmp = Array.from({ length: numbers.length }, () => 0);
  const DFS = (v) => {
    if (v === numbers.length) {
      let sum = tmp.reduce((a, c) => a + c, 0);
      if (sum === target) {
        answer++;
        return;
      } else return;
    } else {
      tmp[v] = numbers[v];
      DFS(v + 1);
      tmp[v] = numbers[v] * -1;
      DFS(v + 1);
    }
  };

  DFS(0);
  return answer;
};
