function solution(str, cha) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === cha) {
      result.push(0);
      continue;
    }
    for (let j = 1; j < str.length; j++) {
      if (str[i - j] === cha || str[i + j] === cha) {
        result.push(j);
        break;
      }
    }
  }
  return result.join(" ");
}

console.log(solution("teachermode", "e"));
