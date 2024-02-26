const solution = (arr) => {
  let result = [];
  let newArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== newArr[i]) result.push(i + 1);
  }
  return result;
};

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
