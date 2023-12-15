const solution = (num, arr) => {
  let answer = 0;
  for (let el of arr) {
    if (String(el).split("")[1] == num) answer++;
  }
  return answer;
};

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));

console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
