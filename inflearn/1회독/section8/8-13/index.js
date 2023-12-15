const permutation = (n) => {
  let answer = [];
  let arr = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  const DFS = (n, r) => {
    if (arr[n][r] > 0) return arr[n][r];
    if (n === r || r === 0) return 1;
    else return (arr[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  };

  for (let r = 0; r <= n; r++) {
    answer.push(DFS(n, r));
  }

  return answer;
};

const solution = (num, totalSum) => {
  let answer;
  let checkArr = Array.from({ length: num + 1 }, () => 0);
  let flag = 0;
  let arr = Array.from({ length: num }, () => 0);
  let combiArr = permutation(num - 1);

  const DFS = (L, sum) => {
    if (flag === 1) return;
    if (L === num && sum === totalSum) {
      answer = arr.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= num; i++) {
        if (checkArr[i] === 0) {
          checkArr[i] = 1;
          arr[L] = i;
          DFS(L + 1, sum + arr[L] * combiArr[L]);
          checkArr[i] = 0;
        }
      }
    }
  };

  DFS(0, 0);
  return answer;
};

console.log(solution(4, 16));
