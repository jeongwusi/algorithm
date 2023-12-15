function solution(str) {
  let newArr = [];
  let arr = str.split("");
  for (let el of arr) {
    if (el === el.toUpperCase()) newArr.push(el.toLowerCase());
    else newArr.push(el.toUpperCase());
  }
  return newArr.join("");
}

console.log(solution("StuDY"));
