const solution = (str1, str2) => {
  let answer = 0;
  for (let el of str1) {
    if (el === str2) answer++;
  }
  return answer;
};

console.log(solution("COMPUTERPROGRAMMING", "R"));
