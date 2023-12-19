const solution = (str, chr) => {
  let answer = [];
  let count = 1000;
  for (const el of str) {
    if (el === chr) {
      count = 0;
      answer.push(count);
    } else {
      count++;
      answer.push(count);
    }
  }

  count = 1000;
  for (let j = str.length - 1; j >= 0; j--) {
    if (str[j] === chr) count = 0;
    else {
      count++;
      answer[j] = Math.min(answer[j], count);
    }
  }
  return answer.join(" ");
};

console.log(solution("teachermode", "e"));
