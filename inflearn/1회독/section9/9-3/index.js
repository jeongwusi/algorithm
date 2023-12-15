const solution = (lng, arr) => {
  let answer = 0;
  let ch = Array.from({ length: lng + 1 }, () => 0);
  let graph = Array.from({ length: lng + 1 }, () => Array());
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  const DFS = (L) => {
    if (L === lng) answer++;
    else {
      for (let i = 0; i < graph[L].length; i++) {
        if (ch[graph[L][i]] === 0) {
          ch[graph[L][i]] = 1;
          DFS(graph[L][i]);
          ch[graph[L][i]] = 0;
        }
      }
    }
  };

  ch[1] = 1;
  DFS(1);
  return answer;
};

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
