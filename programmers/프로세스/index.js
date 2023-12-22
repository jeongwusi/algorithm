function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({ priority, index }));
  let answer = 0;

  while (0 < queue.length) {
    const currentProcess = queue.shift();
    if (queue.some((process) => process.priority > currentProcess.priority))
      queue.push(currentProcess);
    else {
      answer++;
      if (currentProcess.index === location) return answer;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));

console.log(solution([1, 1, 9, 1, 1, 1], 0));
