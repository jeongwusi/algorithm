const solution = (num, A, B) => {
  for (let i = 0; i < num; i++) {
    if (
      (A[i] === 2 && B[i] === 1) ||
      (A[i] === 3 && B[i] === 2) ||
      (A[i] === 1 && B[i] === 3)
    ) {
      console.log("A");
    } else if (A[i] === B[i]) console.log("D");
    else console.log("B");
  }
};

solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
