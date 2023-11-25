const solution = (arr, change) => {
  let result = Number.MAX_SAFE_INTEGER;
  const DFS = (L, sum) => {
    if (sum > change) return;
    if (L > result) return;
    if (sum === change) result = Math.min(result, L);
    else {
      for (let i = 0; i < arr.length; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  };

  DFS(0, 0);
  return result;
};

console.log(solution([1, 2, 5], 15));
