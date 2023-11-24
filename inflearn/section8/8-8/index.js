const solution = (n, m) => {
  let result = [];
  let tmp = Array.from({ length: m }, () => 0);
  const DFS = (L) => {
    if (L === m) {
      result.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  };
  DFS(0);
  return result;
};

console.log(solution(3, 2));
