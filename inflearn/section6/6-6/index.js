function solution(prince, num) {
  let princeArr = Array.from({ length: prince }, (_, index) => index + 1);
  for (let i = 0; i < prince - 1; i++) {
    for (let j = num - 1; j >= 0; j--) {
      if (j === 0) princeArr.shift();
      else {
        princeArr.push(princeArr[0]);
        princeArr.shift();
      }
    }
  }
  return princeArr.join("");
}

console.log(solution(8, 3));
