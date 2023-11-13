function solution(board, moves) {
  let result = 0;
  let arr = [];
  for (let el of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][el - 1] !== 0 && arr[arr.length - 1] === board[i][el - 1]) {
        arr.pop();
        board[i][el - 1] = 0;
        result += 2;
        break;
      } else if (
        board[i][el - 1] !== 0 &&
        arr[arr.length - 1] !== board[i][el - 1]
      ) {
        arr.push(board[i][el - 1]);
        board[i][el - 1] = 0;
        break;
      }
    }
  }
  return result;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
