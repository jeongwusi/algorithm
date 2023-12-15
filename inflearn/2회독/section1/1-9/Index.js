const solution = (str) => {
  let answer = "";
  for (let el of str) {
    if (el === "A") answer += "#";
    else answer += el;
  }
  return answer;
};

console.log(solution("BANANA"));
