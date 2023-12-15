function solution(n) {
  let checkArr = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    let tmp = "";
    if (v === n + 1) {
      for (let i = 0; i < n + 1; i++) {
        if (checkArr[i] === 1 && checkArr[i] !== "") tmp += i;
      }
      if (tmp === "") return;
      else console.log(tmp);
    } else {
      checkArr[v] = 1;
      DFS(v + 1);
      checkArr[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
}

solution(3);
