function solution(a, b, c, d, e, f, g) {
  let number = 0;
  let arr = [a, b, c, d, e, f, g]
    .filter((el) => el % 2 === 1)
    .sort((a, b) => a - b);

  for (let el of arr) {
    number += el;
  }

  return number + "\n" + arr[0];
}

console.log(solution(12, 77, 38, 41, 53, 92, 85));
