const solution = (str) => {
  return Number(str.match(/[0-9]/g, "").join(""));
};

console.log(solution("g0en2T0s8eSoft"));
