const solution = (lng, arr) => {
  const cache = [];
  for (const el of arr) {
    if (cache.includes(el)) {
      cache.splice(cache.indexOf(el), 1);
      cache.unshift(el);
    } else {
      cache.unshift(el);
    }
    if (cache.length > lng) cache.pop();
  }
  return cache;
};

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
