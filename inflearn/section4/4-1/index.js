function solution(arr) {
  let maxNum = 0;
  let maxNumArr = [];

  for (let el of arr) {
    let newArr = String(el).split("");
    let sum = 0;
    for (let i = 0; i < newArr.length; i++) {
      sum += Number(newArr[i]);
    }
    if (sum > maxNum) {
      maxNum = sum;
      maxNumArr.push(el);
    } else if (sum === maxNum) {
      maxNumArr.push(el);
    }
  }

  return Math.max(...maxNumArr);
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
