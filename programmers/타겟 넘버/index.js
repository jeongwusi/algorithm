function solution(numbers, target) {
  let answer = 0;
  let tmp = 0;
  let arr = Array.from({ length: numbers.length }, () => 0);

  function DFS(v) {
    if (v === numbers.length) {
      for (let i = 0; i < numbers.length; i++) {
        if (arr[i] === 1) tmp += numbers[i];
        else tmp -= numbers[i];
      }
      if (tmp === target) answer++;
      tmp = 0;
    } else {
      arr[v] = 1;
      DFS(v + 1);
      arr[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(0);
  return answer;
}

// console.log(solution([1, 1, 1, 1, 1], 3));

console.log(solution([4, 1, 2, 1], 4));
