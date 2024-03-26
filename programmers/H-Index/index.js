function solution(citations) {
  let result = 0;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) result++;
    else break;
  }
  return result;
}

console.log(solution([3, 0, 6, 1, 5]));
