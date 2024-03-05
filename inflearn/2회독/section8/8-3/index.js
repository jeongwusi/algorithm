const solution = (v) => {
  const DFS = (v) => {
    if (v > 7) return;
    else {
      //console.log(v); 전위순회 출력
      DFS(v * 2);
      // console.log(v); 중위순회 출력
      DFS(v * 2 + 1);
      console.log(v); // 후위순회 출력
    }
  };

  DFS(v);
};

solution(1);
