function solution(progresses, speeds) {
  let answer = [];
  let cnt = 1;
  let tmp = [];
  for (let i = 0; i < progresses.length; i++) {
    tmp.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let i = 0;
  while (i < tmp.length) {
    let j = i + 1;
    while (j < tmp.length && tmp[j] <= tmp[i]) {
      cnt++;
      j++;
    }
    answer.push(cnt);
    cnt = 1;
    i = j;
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
