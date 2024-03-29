function solution(numbers) {
  const result = numbers
    .map((number) => number.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
  return result[0] === "0" ? "0" : result;
}

console.log(solution([547, 54, 5]));
