const solution = (num, target) => {
  const stack = Array.from({ length: num }, (_, index) => index + 1);
  while (true) {
    for (let i = 1; i <= target; i++) {
      if (i !== target) stack.push(stack.shift());
      else stack.shift();
    }
    if (stack.length === 1) return stack[0];
  }
};

console.log(solution(8, 3));
