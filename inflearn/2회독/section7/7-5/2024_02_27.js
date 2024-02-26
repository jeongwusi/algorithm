const solution = (size, arr) => {
  let result = [];
  for (const el of arr) {
    result.unshift(el);
    if (result.length > size) result.pop();
  }
  return result;
};

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
