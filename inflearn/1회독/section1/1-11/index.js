function solution(str) {
  let count = 0;
  let arr = str.split("");
  for (let el of arr) {
    if (el === el.toUpperCase()) count++;
  }
  return count;
}

console.log(solution("KoreaTimeGood"));
