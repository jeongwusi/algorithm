function solution(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 1, 1, 0, -1, -1];
  let dy = [-1, -1, -1, 0, 1, 1, 1, 0];
  let checkArr = Array.from({ length: 8 }, () => 0);

  const DFS = (x, y) => {
    board[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (
        nx >= 0 &&
        nx < board.length &&
        ny >= 0 &&
        ny < board.length &&
        board[nx][ny] === 1
      ) {
        DFS(nx, ny);
      }
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        answer++;
        DFS(i, j);
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
