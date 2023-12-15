function solution(str) {
  let count = 1;
  let result = "";
  let newArr = str.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
      count++;
    } else if (newArr[i] !== newArr[i + 1] && count === 1) {
      result += `${newArr[i]}`;
    } else {
      result += `${newArr[i]}${count}`;
      count = 1;
    }
  }
  return result;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
