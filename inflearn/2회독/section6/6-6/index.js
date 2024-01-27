const solution = (num, target) => {
  const stack = Array.from({ length: num }, (_, index) => index + 1);
  while (true) {
    for (let i = 1; i < target; i++) stack.push(stack.shift());
    stack.shift();
    if (stack.length === 1) return stack.shift();
  }
};

console.log(solution(8, 3));
