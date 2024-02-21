const solution = (size, arr) => {
  const cache = [];

  for (const el of arr) {
    if (cache.length === size) {
      cache.pop();
      cache.unshift(el);
    } else cache.unshift(el);
  }
  return cache;
};

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
