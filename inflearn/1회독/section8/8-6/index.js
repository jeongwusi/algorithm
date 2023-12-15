const solution = (num, arr) => {
  let maxWeight = 0;
  const DFS = (L, sum) => {
    if (L === arr.length || num < sum + arr[L]) {
      maxWeight = Math.max(maxWeight, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  };

  DFS(0, 0);
  return maxWeight;
};

console.log(solution(259, [81, 58, 42, 33, 61]));
