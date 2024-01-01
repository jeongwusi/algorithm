const solution = (arr1, arr2) => {
  const result = [];
  for (const el of arr1) {
    if (arr2.includes(el)) result.push(el);
  }

  return result.sort((a, b) => a - b);
};

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
