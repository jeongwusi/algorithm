const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(arr) {
  let result = [];
  for (let el of arr) {
    const reverseEl = Number(String(el).split("").reverse().join(""));
    if (isPrime(reverseEl)) result.push(reverseEl);
  }
  return result.join(" ");
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
