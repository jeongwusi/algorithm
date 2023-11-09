function solution(num, arr) {
  let newArr = [...arr].sort((a, b) => b - a);
  let result = [];

  for (let el of arr) {
    result.push(newArr.indexOf(el) + 1);
  }
  return result;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(5, arr));

// let arr = [92, 92, 92, 92, 76];
// console.log(solution(5, arr));
