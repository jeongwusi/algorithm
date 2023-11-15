function solution(num, arr) {
  let newArr = Array.from({ length: num }).fill(0);
  for (let el of arr) {
    if (!newArr.includes(el)) {
      for (let i = newArr.length - 1; i >= 1; i--) {
        newArr[i] = newArr[i - 1];
      }
      newArr[0] = el;
    } else {
      for (let i = newArr.indexOf(el); i >= 1; i--) {
        newArr[i] = newArr[i - 1];
      }
      newArr[0] = el;
    }
  }
  return newArr;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
