const primeNum = (n) => {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const solution = (arr) => {
  let answer = [];
  for (const el of arr) {
    const reverseEl = Number(String(el).split("").reverse().join(""));
    if (primeNum(reverseEl)) answer.push(reverseEl);
  }
  return answer.join(" ");
};

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
