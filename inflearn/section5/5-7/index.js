function solution(str1, str2) {
  let tmp = new Map();
  for (let el of str1) {
    if (tmp.has(el)) tmp.set(el, tmp.get(el) + 1);
    else tmp.set(el, 1);
  }
  for (let el of str2) {
    if (tmp.has(el) && tmp.get(el) > 0) tmp.set(el, tmp.get(el) - 1);
    else return "NO";
  }
  return "YES";
}

console.log(solution("abaCC", "Caaab"));
console.log(solution("AbaAeCe", "baeeACA"));
