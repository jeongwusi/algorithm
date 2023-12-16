const solution = (str) => {
  if (str.length % 2 === 1) return str[Math.floor(str.length / 2)];
  else return `${str[str.length / 2 - 1]}${str[str.length / 2]}`;
};

console.log(solution("study"));

console.log(solution("good"));
