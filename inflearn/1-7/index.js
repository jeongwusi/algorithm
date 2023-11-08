function solution(number, arr) {
  let count = 0;
  for (let el of arr) {
    let newArr = String(el).split("");
    if (newArr[1] == number) count++;
  }
  return count;
}

// arr = [25, 23, 11, 47, 53, 17, 33];
// console.log(solution(3, arr));

arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));
