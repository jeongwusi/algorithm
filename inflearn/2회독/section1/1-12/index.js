const solution = (str) => {
  let answer = "";
  for (let el of str) {
    answer += el.toLocaleUpperCase();
  }
  return answer;
};

console.log(solution("ItisTimeToStudy"));
