const solution = (num) => {
  let result = 1;
  const DFS = (num) => {
    if (num === 0) return;
    else {
      DFS(num - 1);
      result *= num;
    }
  };

  DFS(num);
  return result;
};

console.log(solution(5));
