function solution(n, computers) {
  let answer = 0;
  const check = Array(n).fill(false);

  const DFS = (node) => {
    check[node] = true;
    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !check[i]) DFS(i);
    }
  };

  for (let i = 0; i < n; i++) {
    if (!check[i]) {
      DFS(i);
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
