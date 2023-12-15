const solution = (arr, n, m) => {
  let answer = 0;

  const DFS = (L, S, sum) => {
    if (L === n) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = S; i < arr.length; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  };

  DFS(0, 0, 0);
  return answer;
};

console.log(solution([2, 4, 5, 8, 12], 3, 6));
