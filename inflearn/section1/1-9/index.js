function solution(str) {
  let newArr = [];
  let arr = str.split("");
  for (let el of arr) {
    if (el === "A") newArr.push("#");
    else newArr.push(el);
  }

  return newArr.join("");
}

console.log(solution("BANANA"));
