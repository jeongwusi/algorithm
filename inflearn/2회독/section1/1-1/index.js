const solution = (arr) => {
  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (answer > arr[i]) answer = arr[i];
  }
  return answer;
};

console.log(solution([6, 5, 11]));
