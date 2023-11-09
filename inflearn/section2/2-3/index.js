const winner = (a, b) => {
  if ((a === 1 && b === 3) || (a === 2 && b === 1) || (a === 3 && b === 2))
    return "A";
  if ((a === 3 && b === 1) || (a === 1 && b === 2) || (a === 2 && b === 3))
    return "B";
  else return "D";
};

function solution(num, a, b) {
  let result = [];

  for (let i = 0; i < num; i++) {
    result.push(winner(a[i], b[i]));
  }
  return result.join(" ");
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(5, a, b));
