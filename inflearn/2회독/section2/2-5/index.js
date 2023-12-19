const solution = (arr) => {
  let answer = [];
  const sortedArr = [...arr].sort((a, b) => b - a);

  for (const el of sortedArr) {
    answer.push(arr.indexOf(el) + 1);
  }

  return answer.join(" ");
};

console.log(solution([87, 89, 92, 100, 76]));

console.log(solution([92, 92, 92, 76]));
