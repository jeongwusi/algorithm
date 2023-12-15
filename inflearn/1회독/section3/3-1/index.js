function solution(str) {
  let a = str.toUpperCase().split("");
  let b = [];
  for (let i = a.length - 1; i > -1; i--) {
    b.push(a[i]);
  }
  if (a.join("") === b.join("")) return "YES";
  else return "NO";
}

console.log(solution("gooG"));
console.log(solution("Vibe"));
