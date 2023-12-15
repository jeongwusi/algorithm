function solution(str) {
  let newArr = [];
  let arr = str.split("");
  for (let el of arr) {
    if (!newArr.includes(el)) newArr.push(el);
  }
  return newArr.join("");
}

console.log(solution("ksekkset"));
