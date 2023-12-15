// 전위순회: 1, 2, 4, 5, 3, 6, 7

function solution1(v) {
  function DFS(v) {
    if (v > 7) return;
    else {
      console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
}

solution1(1);

// 중위순회: 4, 2, 5, 1, 6, 3, 7

function solution2(v) {
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      console.log(v);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
}

solution2(1);

// 후위순회: 4, 5, 2, 6, 7, 3, 1

function solution3(v) {
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      console.log(v);
    }
  }
  DFS(v);
}

solution3(1);
