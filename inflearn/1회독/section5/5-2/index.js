function solution(arr1, arr2) {
  let result = [];
  for (let el of arr1) {
    if (arr2.includes(el)) result.push(el);
  }
  return result.sort((a, b) => a - b);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
