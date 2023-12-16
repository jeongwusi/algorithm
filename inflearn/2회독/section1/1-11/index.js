const solution = (str) => {
  let answer = 0;
  for (let el of str) {
    if (el === el.toLocaleUpperCase()) answer++;
  }
  return answer;
};

console.log(solution("KoreaTimeGood"));
