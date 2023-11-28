const solution = (n, r) => {
  let result;
  let arr = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  const DFS = (n, r) => {
    if (arr[n][r] > 0) return arr[n][r];
    if (n === r || r === 0) return 1;
    else return (arr[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  };

  result = DFS(n, r);
  return result;
};

console.log(solution(33, 19));
