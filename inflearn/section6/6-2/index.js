function solution(str) {
  let arr = [];
  for (let el of str) {
    if (el !== ")") {
      arr.push(el);
    } else {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== "(") {
          arr.pop();
        } else {
          arr.pop();
          break;
        }
      }
    }
  }
  return arr.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
