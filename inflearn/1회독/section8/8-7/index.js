const solution = (limitTime, arr1, arr2) => {
  let result = 0;
  const DFS = (L, scoreSum, timeSum) => {
    if (timeSum > limitTime) return;
    if (L === arr1.length) {
      result = Math.max(result, scoreSum);
    } else {
      DFS(L + 1, scoreSum + arr1[L], timeSum + arr2[L]);
      DFS(L + 1, scoreSum, timeSum);
    }
  };

  DFS(0, 0, 0);
  return result;
};

console.log(solution(20, [10, 25, 15, 6, 7], [5, 12, 8, 3, 4]));
