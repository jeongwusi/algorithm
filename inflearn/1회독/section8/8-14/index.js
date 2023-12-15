// DFS 해서 레벨은 0, for문이 도는 스타트 숫자는 1로 한다.
// 1, 2과 2, 1은 순열에서는 다르지만 조합에서는 같은 거다.

const solution = (n, m) => {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  const DFS = (L, S) => {
    if (L === m) {
      answer.push(tmp.slice());
      console.log(tmp.join());
    } else {
      for (let i = S; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  };

  DFS(0, 1);
  return answer.length;
};

console.log(solution(4, 2));
