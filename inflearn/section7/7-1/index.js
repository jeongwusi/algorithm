function solution(arr) {
  let result = arr;
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[i])
        [result[j], result[i]] = [result[i], result[j]];
    }
  }
  return result;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
