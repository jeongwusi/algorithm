const solution = (str) => {
  let result = "";
  const arr = [];
  for (const el of str) {
    if (arr.length !== 0 && el !== ")" && el !== "(") continue;
    if (el === "(") {
      arr.push(el);
      continue;
    } else if (el === ")") {
      arr.pop();
      continue;
    } else result += el;
  }
  return result;
};

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
