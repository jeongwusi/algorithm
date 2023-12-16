const solution = (arr) => {
  let answer = "";
  for (let el of arr) {
    if (el.length > answer.length) answer = el;
  }
  return answer;
};

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
