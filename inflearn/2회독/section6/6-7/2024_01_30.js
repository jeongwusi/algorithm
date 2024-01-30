const solution = (target, total) => {
  const queue = [...target];
  for (const el of total) {
    if (el === queue[0]) queue.shift();
  }
  return queue.length === 0 ? "YES" : "NO";
};

console.log(solution("CBA", "CBDAGE"));

console.log(solution("CBA", "CADBGE"));
