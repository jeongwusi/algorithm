function solution(number, arr) {
  let newArr = [arr[0]];
  for (let el of arr) {
    if (newArr[newArr.length - 1] < el) newArr.push(el);
  }
  return newArr.length;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(8, arr));
