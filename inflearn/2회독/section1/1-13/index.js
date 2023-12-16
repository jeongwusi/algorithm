const solution = (str) => {
  let answer = "";
  for (let el of str) {
    if (el.toLocaleUpperCase() === el) answer += el.toLocaleLowerCase();
    else answer += el.toLocaleUpperCase();
  }
  return answer;
};

console.log(solution("StuDY"));
