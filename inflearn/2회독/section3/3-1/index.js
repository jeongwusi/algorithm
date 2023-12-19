const solution = (str) => {
  let reverseArr = [...str].reverse();
  let arr = [...str];

  for (let i = 0; i > str.length; i++) {
    if (reverseArr[i] !== arr[i]) return "NO";
  }

  return "YES";
};

console.log(solution("gooG"));
