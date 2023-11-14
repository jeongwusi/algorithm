function solution(essential, total) {
  let essentialArr = essential.split("");
  for (let el of total) {
    if (essential.includes(el)) {
      if (el !== essentialArr.shift()) return "NO";
    }
  }
  if (essentialArr.length === 0) return "YES";
  return "NO";
}

console.log(solution("CBA", "CBDAGE"));
