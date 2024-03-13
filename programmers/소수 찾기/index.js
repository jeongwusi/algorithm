function solution(numbers) {
  let nums = new Set();

  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const generateCombo = (prefix, numbers) => {
    if (prefix !== "") nums.add(Number(prefix));
    for (let i = 0; i < numbers.length; i++) {
      generateCombo(
        prefix + numbers[i],
        numbers.slice(0, i) + numbers.slice(i + 1)
      );
    }
  };

  generateCombo("", numbers);
  return [...nums].filter(isPrime).length;
}

console.log(solution("17"));
