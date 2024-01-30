const solution = (arr) => {
  let index;
  for (let i = 0; i < arr.length; i++) {
    index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[index] > arr[j]) [arr[index], arr[j]] = [arr[j], arr[index]];
    }
  }
  return arr;
};

console.log(solution([13, 5, 11, 7, 23, 15]));
