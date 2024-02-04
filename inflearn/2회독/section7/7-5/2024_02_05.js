const solution = (lng, arr) => {
  let result = [];
  for (const el of arr) {
    if (result.includes(el)) {
      result.splice(result.indexOf(el), 1);
      result.unshift(el);
    } else {
      result.unshift(el);
    }
    if (result.length > lng) result.pop();
  }
  return result;
};

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
