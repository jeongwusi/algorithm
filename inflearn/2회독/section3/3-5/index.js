const solution = (str) => {
  let count = 1;
  let answer = "";
  let ch = `${str[0]}`;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === ch) {
      count++;
    } else {
      if (count === 1) {
        answer += `${ch}`;
        ch = str[i];
      } else {
        answer += `${ch}${count}`;
        count = 1;
        ch = str[i];
      }
    }
  }
  return answer;
};

console.log(solution("KKHSSSSSSSE"));
