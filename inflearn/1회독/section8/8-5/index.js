const solution = (arr) => {
  const total = arr.reduce((a, c) => a + c);
  let result = "NO";
  let flag = "0";
  const DFS = (L, sum) => {
    if (flag === 1) return;
    if (arr.length === L) {
      if (total - sum === sum) {
        result = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  };

  DFS(0, 0);
  return result;
};

console.log(solution([1, 3, 5, 7, 10]));
