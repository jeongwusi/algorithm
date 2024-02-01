const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[index] > arr[j]) index = j;
    }
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
  return arr;
};

console.log(solution([13, 5, 11, 7, 23, 15]));
