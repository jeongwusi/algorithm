const solution = (str, ch) => {
  let cnt = 1000;
  let answer = [];

  for (const el of str) {
    if (el !== ch) {
      cnt += 1;
      answer.push(cnt);
    } else {
      cnt = 0;
      answer.push(cnt);
    }
  }

  cnt = 1000;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ch) {
      cnt += 1;
      answer[i] = Math.min(cnt, answer[i]);
    } else cnt = 0;
  }
  return answer.join(" ");
};

console.log(solution("teachermode", "e"));
